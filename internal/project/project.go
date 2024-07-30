package project

import (
	"context"
	"database/sql"
	"fmt"
	"gogoro/herland.me/internal/database"
	"time"
)

type Project struct {
	Id       int
	Category string
	Name     string
	Slug     string
	Thumb    string
	Content  string
	Intro    string
}

func Get(projectSlug string) (Project, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	var project Project
	err := database.DBCon.QueryRowContext(ctx, "SELECT id, category, name, slug, COALESCE(thumb, ''), COALESCE(content, ''), COALESCE(intro, '') FROM projects WHERE slug = ?", projectSlug).Scan(&project.Id, &project.Category, &project.Name, &project.Slug, &project.Thumb, &project.Content, &project.Intro)
	if err == sql.ErrNoRows {
		return project, nil
	}
	if err != nil {
		return project, err
	}

	return project, nil
}

func GetList(category string) ([]Project, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	query := `SELECT 
		id, category, name, slug, COALESCE(thumb, ''), COALESCE(content, ''), COALESCE(intro, '') 
		FROM projects 
		WHERE category = ?
		ORDER BY 
			CASE WHEN slug = 'draft' THEN 0 ELSE 1 END,
			name`
	if category == "" {
		query = `SELECT id, category, name, slug, COALESCE(thumb, ''), COALESCE(content, ''), COALESCE(intro, '') 
		FROM projects
		ORDER BY 
			CASE WHEN slug = 'draft' THEN 0 ELSE 1 END,
			name`
	}

	rows, err := database.DBCon.QueryContext(
		ctx,
		query,
		category,
	)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var projects []Project
	for rows.Next() {
		var project Project
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

func Create(category, name, slug, thumb, content string) (bool, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	_, err := database.DBCon.ExecContext(
		ctx,
		"insert into projects (category, name, slug, thumb, content) VALUES (?, ?, ?, ?, ?)",
		category, name, slug, thumb, content,
	)
	if err != nil {
		return false, err
	}
	return true, nil
}
