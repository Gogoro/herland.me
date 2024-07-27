package main

import (
	"gogoro/herland.me/cmd/router"
	"gogoro/herland.me/cmd/server"
	"gogoro/herland.me/cmd/service"
)

func main() {
	// Start with initializing all the connections needed
	server := server.Start()
	defer server.Stop()

	srv := service.Init(server)

	router.InitRouter(srv)
}

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
