/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS karlas_groceries;
CREATE DATABASE karlas_groceries;
USE karlas_groceries;

CREATE TABLE IF NOT EXISTS k_grocery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  quantity INT NOT NULL
)


