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
	InitDB() *Database
}

type Database struct {
	DB *sql.DB
}

var DBCon *Database

func errorAndClose(err error) {
	fmt.Println(err)
	os.Exit(1)
}

func InitDB() *Database {
	_ = env.Load(".env")

	// Create a db folder if none exists
	err := os.Mkdir("db", 0750)
	if err != nil && !os.IsExist(err) {
		errorAndClose(err)
	}

	// Get current path
	ex, err := os.Executable()
	if err != nil {
		panic(err)
	}

	fn := env.GetStringOrDefault("SQLITE_PATH", filepath.Join(filepath.Dir(ex), "db"))
	fmt.Printf("db path: %s\n", fn)

	db, err := sql.Open("sqlite", fn)
	if err != nil {
		fmt.Println("Error in db")
		errorAndClose(err)
	}

	fi, err := os.Stat("db")
	if err != nil {
		errorAndClose(err)
	}

	fmt.Printf("%s size: %v\n", "db", fi.Size())

	DBCon = &Database{
		DB: db,
	}

	return nil
}

func CloseDB() {
	if err := DBCon.DB.Close(); err != nil {
		errorAndClose(err)
	}
}
