package database

import (
	"context"
	"database/sql"
	"fmt"
	"time"
)

type ProjectService interface {
	GetProject(projectSlug string) (Project, error)
	GetProjects(category string) ([]Project, error)
	CreateProject(category, name, slug, thumb, content string) (bool, error)
}

type Project struct {
	Id       int
	Category string
	Name     string
	Slug     string
	Thumb    string
	Content  string
	Intro    string
}

func (d *Database) GetProject(projectSlug string) (Project, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	var project Project
	err := d.Client.QueryRowContext(ctx, "SELECT id, category, name, slug, thumb, COALESCE(content, ''), intro FROM projects WHERE slug = ?", projectSlug).Scan(&project.Id, &project.Category, &project.Name, &project.Slug, &project.Thumb, &project.Content, &project.Intro)
	if err == sql.ErrNoRows {
		return project, nil
	}
	if err != nil {
		return project, err
	}

	return project, nil
}

func (d *Database) GetProjects(category string) ([]project, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	rows, err := d.Client.QueryContext(
		ctx,
		"SELECT id, category, name, slug, thumb, COALESCE(content, ''), intro FROM projects WHERE category = ?",
		category,
	)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var projects []project
	for rows.Next() {
		var project project
		if err = rows.Scan(
			&project.Id, &project.Category, &project.Name, &project.Slug, &project.Thumb, &project.Content, &project.Intro,
		); err != nil {
			fmt.Println(err)
			return nil, err
		}

		fmt.Println(project)

		projects = append(projects, project)
	}

	if err = rows.Err(); err != nil {
		fmt.Println(err)
		return nil, err
	}

	return projects, err
}

func (d *Database) CreateProject(category, name, slug, thumb, content string) (bool, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	_, err := d.Client.ExecContext(
		ctx,
		"insert into projects (category, name, slug, thumb, content) VALUES (?, ?, ?, ?, ?)",
		category, name, slug, thumb, content,
	)
	if err != nil {
		return false, err
	}
	return true, nil
}
