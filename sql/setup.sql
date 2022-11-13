-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS customers;

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
