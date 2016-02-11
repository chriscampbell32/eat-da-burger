CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(255),
devoured  BOOLEAN,
date datetime NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);