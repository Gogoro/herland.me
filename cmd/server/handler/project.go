package handler

import (
	"fmt"
	"gogoro/herland.me/internal/project"
	"html/template"

	"github.com/labstack/echo/v4"
)

type ProjectsData struct {
	CurrentProjects []project.Project
	PastProjects    []project.Project
	Error           string
}

func Projects(c echo.Context) error {
	currentProjects, err := project.GetList("CURRENT")
	pastProjects, err := project.GetList("PAST")

	pd := ProjectsData{
		CurrentProjects: nil,
		PastProjects:    nil,
		Error:           "",
	}

	if err != nil {
		pd.Error = "Failed to fetch projects"
	}

	pd.CurrentProjects = currentProjects
	pd.PastProjects = pastProjects

	return c.Render(200, "projects-page", pd)
}

type ProjectData struct {
	Id       int
	Category string
	Name     string
	Slug     string
	Thumb    string
	Content  template.HTML
	Intro    string
	Error    string
}

func Project(c echo.Context) error {
	project, err := project.GetSlug(c.Param("projectSlug"))

	var pd ProjectData

	if err != nil {
		fmt.Println(err)
		pd.Error = "Failed to fetch project"
	}

	pd.Id = project.Id
	pd.Category = project.Category
	pd.Name = project.Name
	pd.Slug = project.Slug
	pd.Thumb = project.Thumb
	pd.Content = template.HTML(project.Content)
	pd.Intro = project.Intro
	pd.Error = ""

	return c.Render(200, "project-page", pd)
}
