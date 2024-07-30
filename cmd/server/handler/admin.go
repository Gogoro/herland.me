package handler

import (
	"fmt"
	"gogoro/herland.me/internal/project"

	"github.com/labstack/echo/v4"
)

func AdminThoughts(c echo.Context) error {
	return c.Render(200, "admin-thoughts", nil)
}

type AdminProjectsData struct {
	Projects []project.Project
}

func AdminProjects(c echo.Context) error {
	p, err := project.GetList("")
	if err != nil {
		fmt.Printf("No project or failed to find one %v", err)
	}

	return c.Render(200, "admin-projects", AdminProjectsData{Projects: p})
}

type AdminProjectData struct {
	Project project.Project
}

// If there is no project, then create a new one
func AdminProject(c echo.Context) error {
	p, err := project.Get(c.Param("projectSlug"))
	if err != nil {
		fmt.Printf("No project or failed to find one %v", err)
	}

	// No project defined
	if (project.Project{}) != p {
		return c.Render(200, "admin-project", AdminProjectData{Project: p})
	}

	created, err := project.Create("CURRENT", "DRAFT", "draft", "", "")
	if err != nil || created != true {
		fmt.Println(fmt.Errorf("Failed to create project %v", err))
	}

	return c.Redirect(302, "/admin/projects/draft")
}
