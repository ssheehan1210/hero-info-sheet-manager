CREATE DATABASE gathirdproject;

\c gathirdproject

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(32),
	password_digest VARCHAR(60)
);

CREATE TABLE heroes(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	user_id INT REFERENCES users(id),
	dc_hero BOOLEAN,
	academia_hero BOOLEAN,
	marvel_hero BOOLEAN,
	title VARCHAR(255),
	subtitle VARCHAR(800),
	over_eighteen BOOLEAN,
	gender VARCHAR(100),
	hometown VARCHAR(255),
	current_location VARCHAR(255),
	image VARCHAR(800),
	affiliation VARCHAR(100),
	has_superpowers BOOLEAN,
	powers VARCHAR(5000),
	abilities VARCHAR(5000),
	arsenal VARCHAR(5000),
	weaknesses VARCHAR(5000)
);