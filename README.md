# Pretest Internship - Tabel Data

Postman [Documentation](https://documenter.getpostman.com/view/20118417/2s9Xy5Kpv9)

<hr />

System requirement:

1.  NodeJS version >= `18.17.0`
2.  NPM version >= `9.6.7`
3.  MySQL version >=`5.7`

<br />

Installation Guide:

1.  Clone repo `https://github.com/ansthsys/pretest-tabeldata`
2.  Change directory into project `cd pretest-tabeldata`
3.  Install dependecies from NPM `npm install`
4.  Create environment file `cp .env.example .env`
5.  Fill `JWT_KEY` in `.env` file with random string, example `4FCB46B8FECEC16D9213F4A30C94F9CE`
6.  Setup database in Sequelize config file at `./config/config.json`
7.  Create database in MySQL with name same as in config file, create via terminal: `npx sequelize-cli db:create`, or create manual via PHPMyAdmin
8.  Run all migrations `npx sequelize-cli db:migrate`
9.  Run all seeders `npx sequelize-cli db:seed:all`
10.  Run Application `npm start`
