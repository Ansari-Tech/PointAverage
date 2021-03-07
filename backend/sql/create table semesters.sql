create table semesters (
id integer primary key AUTOINCREMENT,
user text,
year integer,
period text,
gradebookID integer);


insert into semesters (user, year, period, gradebookID) values('admin', 2021, 'Fall', 1)