package handler

import (
	"fmt"
	"gogoro/herland.me/internal/project"

	"github.com/labstack/echo/v4"
)

func AdminThoughts(c echo.Context) error {
	return c.Render(200, "admin-thoughts", nil)
}

func AdminProjects(c echo.Context) error {
	return c.Render(200, "admin-projects", nil)
}

type AdminProjectData struct {
	Project project.Project
}

func AdminProject(c echo.Context) error {
	project, err := project.Get(c.Param("projectSlug"))
	if err != nil {
		fmt.Printf("No project %v", err)
	}

	// If there is no project, then create it.

	return c.Render(200, "admin-project", nil)
}
