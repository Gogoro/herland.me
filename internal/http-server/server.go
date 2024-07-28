package HTTPServer

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Templates struct {
	templates *template.Template
}

func (t *Templates) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func newTemplate() *Templates {
	return &Templates{
		templates: template.Must(template.ParseGlob("views/*.html")),
	}
}

type HTTPServer struct {
	Echo *echo.Echo
}

func Init() {
	s := &HTTPServer{
		Echo: echo.New(),
	}

	// Setup Echo
	s.Echo.Use(middleware.Logger())
	s.Echo.Static("/static", "static")
	s.Echo.Renderer = newTemplate()

	// Initialize the routes
	s.Echo.GET("/", func(c echo.Context) error {
		return c.Render(200, "index", nil)
	})

	s.Echo.GET("/projects", projectsHandler)
	s.Echo.GET("/projects/:projectSlug", projectHandler)

	s.Echo.GET("/thoughts", func(c echo.Context) error {
		return c.Render(200, "thoughts-page", nil)
	})

	s.Echo.GET("/thoughts/:thoughtId", func(c echo.Context) error {
		return c.Render(200, "thought-page", nil)
	})

	s.Echo.GET("/about-me", func(c echo.Context) error {
		return c.Render(200, "about-page", nil)
	})

	s.Echo.GET("/admin", func(c echo.Context) error {
		return c.Redirect(302, "/admin/thoughts")
	})

	s.Echo.GET("/admin/login", func(c echo.Context) error {
		return c.Render(200, "admin-login", nil)
	})

	s.Echo.GET("/admin/thoughts", func(c echo.Context) error {
		return c.Render(200, "admin-thoughts", nil)
	})

	s.Echo.GET("/admin/projects", func(c echo.Context) error {
		return c.Render(200, "admin-projects", nil)
	})

	// Start the server
	s.Echo.Logger.Fatal(s.Echo.Start(":42069"))
}

/*
func (s *HTTPServer) initRoutes() {

	   e.POST("/contacts", func(c echo.Context) error {
	     name := c.FormValue("name")
	     email := c.FormValue("email")

	     if (page.Data.hasEmail(email)) {
	       formData := newFormData()
	       formData.Values["name"] = name
	       formData.Values["email"] = email
	       formData.Errors["email"] = "Email already exists"

	       return c.Render(422, "form", formData)
	     }

	     contact := newContact(name, email)
	     page.Data.Contacts = append(page.Data.Contacts, contact)
	     c.Render(200, "form", newFormData())
	     return c.Render(200, "oob-contact", contact)
	   })

	   e.DELETE("/contacts/:id", func(c echo.Context) error {
	     idStr := c.Param("id")
	     id, err := strconv.Atoi(idStr)
	     if err != nil {
	       return c.String(400, "Invalid id")
	     }

	     index := page.Data.indexOf(id)
	     if (index == -1) {
	       return c.String(404, "Contact not found")
	     }

	     page.Data.Contacts = append(page.Data.Contacts[:index], page.Data.Contacts[index+1:]...)

	     return c.NoContent(200)
	   })

}
*/
