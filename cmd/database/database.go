package database

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"

	"github.com/maragudk/env"
	_ "modernc.org/sqlite"
)

type DatabaseInterface interface {
	InitDB() (*Database, error)
	CloseDB() error
}

type Database struct {
	Client *sql.DB
}

func errAndPanic(err error) {
	fmt.Println(err)
	panic(err)
}

func InitDB() *Database {
	_ = env.Load(".env")

	// Create a db folder if none exists
	err := os.Mkdir("db", 0750)
	if err != nil && !os.IsExist(err) {
		errAndPanic(err)
	}

	// Get current path
	ex, err := os.Executable()
	if err != nil {
		errAndPanic(fmt.Errorf("Failed to get current path %w", err))
	}

	fn := env.GetStringOrDefault("SQLITE_PATH", filepath.Join(filepath.Dir(ex), "db"))
	fmt.Printf("db path: %s\n", fn)

	db, err := sql.Open("sqlite", fn)
	if err != nil {
		errAndPanic(fmt.Errorf("Failed to open SQL connection %w", err))
	}

	fi, err := os.Stat("db")
	if err != nil {
		errAndPanic(fmt.Errorf("Failed to get stats from DB %w", err))
	}

	fmt.Printf("%s size: %v\n", "db", fi.Size())

	return &Database{
		Client: db,
	}
}

func (d *Database) CloseDB() error {
	return d.Client.Close()
}
