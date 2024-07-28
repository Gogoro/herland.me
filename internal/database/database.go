package database

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"

	"github.com/maragudk/env"
	_ "modernc.org/sqlite"
)

var DBCon *sql.DB

func errAndPanic(err error) {
	fmt.Println(err)
	panic(err)
}

func Open() {
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

	DBCon = db
}

func Close() error {
	return DBCon.Close()
}
