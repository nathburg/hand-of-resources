-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS slogans;

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

create table movies (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(50),
	budget VARCHAR(50),
	genre VARCHAR(50)
);
insert into movies (title, budget, genre) values ('Tron', '$7.00', 'Action|Adventure|Sci-Fi');
insert into movies (title, budget, genre) values ('Red State', '$7.34', 'Horror|Thriller');
insert into movies (title, budget, genre) values ('Big Lebowski, The', '$0.00', 'Comedy|Crime');
insert into movies (title, budget, genre) values ('Les modèles de ''Pickpocket''', '$2.93', 'Documentary');
insert into movies (title, budget, genre) values ('Tonight and Every Night', '$3.26', 'Musical');
insert into movies (title, budget, genre) values ('Nina Takes a Lover', '$3.54', 'Comedy|Romance');
insert into movies (title, budget, genre) values ('Raid on Rommel', '$2.06', 'War');
insert into movies (title, budget, genre) values ('Heavenly Forest', '$7.29', 'Drama|Romance');
insert into movies (title, budget, genre) values ('My Friend Ivan Lapshin (Moy drug Ivan Lapshin)', '$7.38', 'Drama');
insert into movies (title, budget, genre) values ('Future Cops (Chao ji xue xiao ba wang)', '$5.14', 'Action');

create table companies (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	city VARCHAR(50),
	company VARCHAR(50),
	preferred_currency VARCHAR(50),
	latitude VARCHAR(50),
	country VARCHAR(50)
);
insert into companies (city, company, preferred_currency, latitude, country) values ('Khokhryaki', 'Brainsphere', 'Ruble', 56.9154663, 'Russia');
insert into companies (city, company, preferred_currency, latitude, country) values ('Famaillá', 'Fanoodle', 'Peso', -34.5903044, 'Argentina');
insert into companies (city, company, preferred_currency, latitude, country) values ('Kongwan', 'Rhynyx', 'Yuan Renminbi', 31.566634, 'China');
insert into companies (city, company, preferred_currency, latitude, country) values ('Linhares', 'Ainyx', 'Real', -19.39656, 'Brazil');
insert into companies (city, company, preferred_currency, latitude, country) values ('Hetou', 'Brainlounge', 'Yuan Renminbi', 24.3520171, 'China');
insert into companies (city, company, preferred_currency, latitude, country) values ('Höfn', 'Skibox', 'Krona', 64.1272315, 'Iceland');
insert into companies (city, company, preferred_currency, latitude, country) values ('Niny', 'Blognation', 'Ruble', 44.4868448, 'Russia');
insert into companies (city, company, preferred_currency, latitude, country) values ('Lewograran', 'Photojam', 'Rupiah', -8.4702242, 'Indonesia');
insert into companies (city, company, preferred_currency, latitude, country) values ('Beima', 'Avaveo', 'Yuan Renminbi', 37.617937, 'China');
insert into companies (city, company, preferred_currency, latitude, country) values ('Khursā', 'Yambee', 'Shekel', 31.440961, 'Palestinian Territory');

create table slogans (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	stock VARCHAR(50),
	saying VARCHAR(50)
);
insert into slogans (stock, saying) values ('Banc of California, Inc.', 'repurpose out-of-the-box ROI');
insert into slogans (stock, saying) values ('Medley Capital Corporation', 'revolutionize enterprise deliverables');
insert into slogans (stock, saying) values ('Liberty Expedia Holdings, Inc.', 'evolve seamless relationships');
insert into slogans (stock, saying) values ('Corvus Pharmaceuticals, Inc.', 'whiteboard leading-edge portals');
insert into slogans (stock, saying) values ('Mizuho Financial Group, Inc.', 'seize user-centric niches');
insert into slogans (stock, saying) values ('PIMCO Municipal Income Fund', 'deploy interactive infrastructures');
insert into slogans (stock, saying) values ('Orthofix International N.V.', 'disintermediate customized ROI');
insert into slogans (stock, saying) values ('AllianceBernstein Holding L.P.', 'drive cross-media interfaces');
insert into slogans (stock, saying) values ('Ferro Corporation', 'target rich web services');
insert into slogans (stock, saying) values ('Cars.com Inc.', 'matrix global functionalities');