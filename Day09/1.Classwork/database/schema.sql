create database IF NOT EXISTS practice_db;
use practice_db;
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(100),
    mobile CHAR(10)
);

create table students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    course VARCHAR(20),
    email VARCHAR(50)
);

