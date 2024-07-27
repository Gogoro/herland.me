package service

import "gogoro/herland.me/cmd/server"

type Service struct {
	server *server.Server
}

func Init(server *server.Server) *Service {
	return &Service{
		server: server,
	}
}
