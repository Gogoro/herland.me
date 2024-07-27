package service

type projectsData struct {
	CurrentProjects []project
	PastProjects    []project
	Error           string
}

func (s *Service) GetProjects() projectsData {
	currentProjects, err := s.server.DB.Client.GetProjects("CURRENT")
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
