-- CREATE DATABASE avengers;
USE avengers;
-- CREATE TABLE avengers (url varchar(100), name varchar(50), appearances varchar(5), current varchar(3), gender varchar(6), probationaryIntro varchar(25), fullAvengersIntro varchar(25), year int, yearsSinceJoining int, honorary varchar(25), death1 varchar(5), return1 varchar(5), death2 varchar(5), return2 varchar(5), death3 varchar(5), return3 varchar(5), death4 varchar(5), return4 varchar(5), death5 varchar(5), return5 varchar(5), notes varchar(250));
-- DELETE FROM avengers WHERE name IS NULL; 
SELECT * 
FROM avengers2;
-- DELETE FROM avengers2; 
-- CREATE TABLE new_heroes AS (SELECT * FROM avengers2);
-- UPDATE avengers2 SET `Name/Alias`='not available';
INSERT INTO `avengers`.`avengers2`
(`URL`,
`Name/Alias`,
`Appearances`,
`Current?`,
`Gender`,
-- `Probationary Introl`,
`Full/Reserve Avengers Intro`,
`Year`,
`Years since joining`,
`Honorary`,
`Death1`,
-- `Return1`,
-- `Death2`,
-- `Return2`,
-- `Death3`,
-- `Return3`,
-- `Death4`,
-- `Return4`,
-- `Death5`,
-- `Return5`,
`Notes`)
VALUES
("n/a",
"Benji",
548,
"yes",
"female",

"7-Nov",
1999,
5,
"Full",
"No",

"NA");
SELECT * 
FROM avengers2;