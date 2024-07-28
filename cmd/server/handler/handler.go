package handler

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
)

type Templates struct {
	templates *template.Template
}

func (t *Templates) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func NewTemplate() *Templates {
	return &Templates{
		templates: template.Must(template.ParseGlob("views/*.html")),
	}
}

func Index(c echo.Context) error {
	return c.Render(200, "index", nil)
}

func Thoughts(c echo.Context) error {
	return c.Render(200, "thoughts-page", nil)
}

func Thought(c echo.Context) error {
	return c.Render(200, "thought-page", nil)
}

func AboutMe(c echo.Context) error {
	return c.Render(200, "about-page", nil)
}

func Login(c echo.Context) error {
	return c.Render(200, "admin-login", nil)
}
