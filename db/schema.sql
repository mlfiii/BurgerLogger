CREATE DATABASE burgers_db;
USE burgers_db;


-- id, author, chirp, and time created.
CREATE TABLE `burgers` (

  -- TABLE CODE TO GO HERE

id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured boolean NOT NULL,
primary key (id)

);