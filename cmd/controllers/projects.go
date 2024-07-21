package controllers

import (
	"database/sql"
	"gogoro/herland.me/cmd/database"
)

func CreateProjects() (bool, error) {
	_, err := database.DBCon.DB.Exec(`
drop table if exists t;
create table t(i);
insert into t values(42), (314), (300);
`)
	if err != nil {
		return false, err
	}
	return true, nil
}

type project struct {
	id       int
	category string
	name     string
	slug     string
	thumb    string
	content  sql.NullString
}

func GetProjects() ([]project, error) {
	rows, err := database.DBCon.DB.Query("select * from projects order by name;")
	if err != nil {
		return nil, err
	}

	var projects []project
	for rows.Next() {
		var project project
		if err = rows.Scan(&project.id, &project.category, &project.name, &project.slug, &project.thumb, &project.content); err != nil {
			return nil, err
		}

		projects = append(projects, project)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return projects, nil
}
