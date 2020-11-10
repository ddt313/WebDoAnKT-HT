create database DOAN
go
use DOAN
go
create table Account(
	id int identity(1, 1) not null unique,
	username char(20) not null primary key,
	pass char(50) not null,
	acc_name nvarchar(50),
)
go
create table Music(
	id int identity(1, 1) not null primary key,
	name_music nvarchar(100) not null,
	src nvarchar(100) not null,
	mu_type int check(mu_type > 0)
)
go
create table Diary(
	id int identity(1, 1) not null primary key,
	username char(20) not null foreign key(username) references Account(username) on delete cascade,
	id_music int not null foreign key(id_music) references Music(id) on delete cascade,
	d_time datetime not null
)