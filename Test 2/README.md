# api-test-bibit

This codebase uses an implementation of CQRS (Command Query Separation)

## Feature

- Implement Codebase CQRS
- Database Migration with Sequelize
- ORM with Sequelize
- Unit Testing with Jest
- Available running with Docker and Docker Compose

## Installation

1.  First you have to configuration env
2.  Installation Standart

```bash
# install dependencies
$ npm install

# running migration
$ npm run sequelize db:migration

# running application
$ npm start
```

3. Installation with docker compose

Makesure you have to install docker

```bash
# running application with docker compose
$ docker-compose up
```

## Running unit testing

```bash
npm run test
```

## Authors

- **Muhammad Zahidin Nur** - _Backend Developer_ - [My Github](https://github.com/zahidin)
