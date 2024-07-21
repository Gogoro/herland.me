-- +goose Up
-- +goose StatementBegin
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT CHECK( category IN ("CURRENT", "PAST") ) NOT NULL DEFAULT "CURRENT",
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  thumb TEXT NOT NULL,
  content TEXT
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  slug TEXT UNIQUE
);

CREATE TABLE thoughtsCategories (
  categoryId INTEGER REFERENCES categories(id),
  thoughtId INTEGER REFERENCES thoughts(id),
  PRIMARY KEY (categoryId, thoughtId)
);

CREATE TABLE thoughts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  slug TEXT UNIQUE,
  content TEXT
);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS thoughtsCategories;
DROP TABLE IF EXISTS thoughts;
-- +goose StatementEnd
