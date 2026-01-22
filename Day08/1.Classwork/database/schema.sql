create database project;

use project;

create table if not exists users(
email varchar(30) not null unique,
password varchar(8) not null,
role enum("Admin","Student") default "Student"
);


 create table if not exists courses(course_id int primary key auto_increment,
 course_name varchar(50) not null,
 description varchar(500) not null,
 fees int,
 start_date date,
 end_date date,
 video_expire_days int
 );


 create table if not exists students(
 reg_no int primary key auto_increment,
 name varchar(50) not null,
 email varchar(50) unique not null,
 course_id int,
 mobile_no varchar(15),
 profile_pic blob,
 foreign key (email) references users(email) on delete cascade,
 foreign key (course_id) references courses(course_id));

create table if not exists videos(
video_id int primary key auto_increment,
course_id int,
title varchar(100) not null,
description varchar(500),
youtube_url varchar(100)not null,
added_at datetime default current_timestamp,
foreign key (course_id) references courses(course_id) on delete cascade
);
