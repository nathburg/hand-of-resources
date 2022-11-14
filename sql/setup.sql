-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS cars;

create table customers (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL
);
INSERT INTO customers (first_name, last_name, email, gender)
    VALUES
    ('Woodman', 'Habishaw', 'whabishaw0@wired.com', 'Male'),
    ('Zorah', 'Maccraw', 'zmaccraw1@bbc.co.uk', 'Female'),
    ('Freeman', 'Croci', 'fcroci2@businessweek.com', 'Male'),
    ('Erna', 'Stubbert', 'estubbert3@php.net', 'Female'),
    ('Brana', 'Buntain', 'bbuntain4@stanford.edu', 'Female'),
    ('Bengt', 'Jansen', 'bjansen5@cloudflare.com', 'Male'),
    ('Margalo', 'Parram', 'mparram6@chicagotribune.com', 'Female'),
    ('Perle', 'Posvner', 'pposvner7@nifty.com', 'Female'),
    ('Cal', 'Woollin', 'cwoollin8@cafepress.com', 'Male'),
    ('Kale', 'Schulze', 'kschulze9@adobe.com', 'Male');

create table cars (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    make VARCHAR(50),
	model VARCHAR(50),
	year VARCHAR(50),
	VIN VARCHAR(50)
);
insert into cars (make, model, year, VIN) values ('Mercedes-Benz', 'CLK-Class', 2001, '2C3CCAEG7DH447723');
insert into cars (make, model, year, VIN) values ('Dodge', 'Ram Van 1500', 2001, '3MZBM1U74EM956433');
insert into cars (make, model, year, VIN) values ('Jeep', 'Patriot', 2009, 'WBADR634X3G115612');
insert into cars (make, model, year, VIN) values ('Dodge', 'Dakota', 2010, '3D73M4HL9BG980159');
insert into cars (make, model, year, VIN) values ('Toyota', 'Celica', 1997, 'WBALW7C54ED922716');
insert into cars (make, model, year, VIN) values ('Kia', 'Amanti', 2008, '4T1BF1FK8DU970808');
insert into cars (make, model, year, VIN) values ('Land Rover', 'Defender', 1994, '2G4GL5EX2F9708124');
insert into cars (make, model, year, VIN) values ('Oldsmobile', 'Silhouette', 2003, 'WDDEJ7KB2AA722100');
insert into cars (make, model, year, VIN) values ('Dodge', 'Durango', 2012, 'JN8AE2KP0F9370207');
insert into cars (make, model, year, VIN) values ('Subaru', 'Outback', 2008, '2G4WS52JX41646871');
