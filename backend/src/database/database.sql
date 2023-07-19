-- ___________________________________ CREATE TABLES ___________________________________ 
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` BOOL NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- ___________________________________ POPULATE TABLES ___________________________________ 
-- Create user
INSERT INTO `user` (`email`, `password`, `is_admin`) 
VALUES 
('admin@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$mkm5zcvh7mTtDGu0UsOZxw$bcLPeyJqaJGN4mX2aILxsnbeCszJrBJUJDjEXewSrE8', 1),
('user@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$+RUYi4CW31MZnxxRBO9Alw$u0TJVC8gPPUeb/bj/1sjeexnbnIBYP7aLk2ydKm2odU', 0);
-- ('admin@gmail.com', 'admin', 1),
-- ('user@gmail.com', 'user', 0);
