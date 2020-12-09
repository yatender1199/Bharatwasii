DROP DATABASE IF EXISTS bharatwasii;
CREATE DATABASE bharatwasii;
DROP TABLE IF EXISTS`user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
   PRIMARY KEY(id)
); 
INSERT INTO `user` VALUES("1","dummy@gmail.com","John Doe","jdoe","nopassw");