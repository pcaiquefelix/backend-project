# Hey There! 🖐🏼

This is a backend project using `TypeORM` (version 0.2.36).\
Some techonologies were used here, such as:

![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## Informations

The project was built with `Docker` and `Postgres` in the port 5433.\
The `server` will work in the localhost, port 3000.\
The name of the database registered is `crud`.\
For more related informations read the file `.env`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the project server.

### `npm run typeorm migration:create -n NameOfTheMigration`

Creates a new Migration in the folder `migrations`

## Important

To start using CRUD, the project server must be started and its related database must be working.