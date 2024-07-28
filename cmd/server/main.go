package main

import (
	"fmt"
	"gogoro/herland.me/cmd/server/handler"
	"gogoro/herland.me/internal/database"

	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/maragudk/env"
)

func main() {
	_ = env.Load(".env")
	// Start with setting up the DB Store
	database.Open()
	defer database.Close()

	e := echo.New()

	// Setup Echo
	e.Use(middleware.Logger())
	e.Static("/static", "static")
	e.Renderer = handler.NewTemplate()

	// Initialize the routes
	e.GET("/", handler.Index)

	e.GET("/projects", handler.Projects)
	e.GET("/projects/:projectSlug", handler.Project)

	e.GET("/thoughts", handler.Thoughts)
	e.GET("/thoughts/:thoughtId", handler.Thought)

	e.GET("/about-me", handler.AboutMe)

	e.GET("/login", handler.Login)
	e.POST("/login", handler.PostLogin)

	r := e.Group("/admin")

	r.Use(middleware.KeyAuthWithConfig(middleware.KeyAuthConfig{
		KeyLookup: "cookie:auth",
		Validator: func(key string, c echo.Context) (bool, error) {
			claims := &handler.JwtCustomClaims{}
			token, err := jwt.ParseWithClaims(key, claims, func(token *jwt.Token) (any, error) {
				return []byte(env.GetStringOrDefault("JWT_SECRET", "TEST")), nil
			})

			if err != nil {
				return false, err
			}
			if !token.Valid {
				return false, fmt.Errorf("Not a valid token")
			}
			return true, nil
		},
	}))

	r.GET("/thoughts", handler.AdminThoughts)
	r.GET("/projects", handler.AdminProjects)
	r.GET("/projects/:projectSlug", handler.AdminProject)

	// Start the server
	e.Logger.Fatal(e.Start(":42069"))
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

/*
var id = 0;
type Contact struct {
  Id int
  Name string
  Email string
}

func newContact(name string, email string) Contact {
  id++
  return Contact{
    Name: name,
    Email: email,
    Id: id,
  }
}

type Contacts = []Contact


type Data struct {
  Contacts Contacts
}

func (d *Data) indexOf(id int) int {
  for i, contact := range d.Contacts {
    if contact.Id == id {
      return i
    }
  }
  return -1
}

func (d Data) hasEmail(email string) bool {
  for _, contact := range d.Contacts{
    if (contact.Email == email) {
      return true
    }
  }
  return false
}

func newData() Data {
  return Data{
    Contacts: []Contact{
      newContact("Ole", "ole@herland.me"),
      newContact("Linn-Tone", "linntone.ellefsen@gmail.com"),
    },
  }
}

type FormData struct {
  Values map[string]string
  Errors map[string]string
}

func newFormData() FormData {
  return FormData{
    Values: make(map[string]string),
    Errors: make(map[string]string),
  }
}

type Page struct {
  Data Data
  Form FormData
}

func newPage() Page {
  return Page{
    Data: newData(),
    Form: newFormData(),
  }
}
*/
