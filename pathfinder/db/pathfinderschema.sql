DROP DATABASE IF EXISTS pathfinderDB;
CREATE DATABASE pathfinderDB;
USE pathfinderDB;


CREATE TABLE userdata (
userID INT NOT NULL,
username VARCHAR(100) NOT NULL,
userpassword VARCHAR(100) NOT NULL,
PRIMARY KEY (userID)
);

CREATE TABLE researchdata (
questionID INT NOT NULL,
cntrlgroupdp INT NOT NULL,
expgroupdp INT NOT NULL,
PRIMARY KEY (questionID)
);