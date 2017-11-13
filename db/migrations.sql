CREATE DATABASE gathirdproject;

\c gathirdproject

CREATE TABLE heroes (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255)
);