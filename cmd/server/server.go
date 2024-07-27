package server

import "gogoro/herland.me/cmd/database"

type Server struct {
	DB *database.Database
}

type ServerInterface interface {
	Start() *Server
	Stop(s *Server)
}

func Start() *Server {
	return &Server{
		DB: database.InitDB(),
	}
}

func (s *Server) Stop() {
	// remember to close what needs closing
	s.DB.CloseDB()
}
