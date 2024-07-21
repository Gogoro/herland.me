package controllers

import (
	"context"
	"database/sql"
	"fmt"
	"gogoro/herland.me/cmd/database"
	"time"
)

type project struct {
	Id       int
	Category string
	Name     string
	Slug     string
	Thumb    string
	Content  string
	Intro    string
}

func CreateProject(category, name, slug, thumb, content string) (bool, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	_, err := database.DBCon.DB.ExecContext(
		ctx,
		"insert into projects (category, name, slug, thumb, content) VALUES (?, ?, ?, ?, ?)",
		category, name, slug, thumb, content,
	)
	if err != nil {
		return false, err
	}
	return true, nil
}

type projectsData struct {
	CurrentProjects []project
	PastProjects    []project
	Error           string
}

func selectProjects(category string) ([]project, error) {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	rows, err := database.DBCon.DB.QueryContext(
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

func GetProjects() projectsData {
	currentProjects, err := selectProjects("CURRENT")
	pastProjects, err := selectProjects("PAST")

	if err != nil {
		return projectsData{
			CurrentProjects: nil,
			PastProjects:    nil,
			Error:           "Failed to fetch projects",
		}
	}

	return projectsData{
		CurrentProjects: currentProjects,
		PastProjects:    pastProjects,
		Error:           "",
	}
}

type ProjectData struct {
	Id       int
	Category string
	Name     string
	Slug     string
	Thumb    string
	Content  string
	Intro    string
	Error    string
}

func GetProject(projectSlug string) ProjectData {
	ctx, cancelFunc := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancelFunc()

	var ProjectData ProjectData
	err := database.DBCon.DB.QueryRowContext(ctx, "SELECT id, category, name, slug, thumb, COALESCE(content, ''), intro FROM projects WHERE slug = ?", projectSlug).Scan(&ProjectData.Id, &ProjectData.Category, &ProjectData.Name, &ProjectData.Slug, &ProjectData.Thumb, &ProjectData.Content, &ProjectData.Intro)
	if err == sql.ErrNoRows {
		ProjectData.Error = fmt.Sprintf("project %s: unknown project", projectSlug)
		return ProjectData
	}
	if err != nil {
		ProjectData.Error = fmt.Sprintf("project %s: %v", projectSlug, err)
		return ProjectData
	}

	return ProjectData
}
