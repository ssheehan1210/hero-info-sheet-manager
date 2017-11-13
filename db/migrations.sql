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
	user_id INT REFERENCES users(id)
);