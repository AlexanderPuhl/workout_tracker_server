# Workout Tracker Server

## Description

This is the API for the workout tracker app.

## Installation and Setup

1. Clone the project down and run npm install to install node modules.
1. Setup PostgreSQL on your pc.

   1. Download PostgreSQL from [here](https://www.postgresql.org/download/), version number shouldn't matter.
   1. Install PostgreSQL with all the default settings, remember the password you chose while installing.
   1. After PostgreSQL is done installing, search for pgAdmin on your system and run it, it will ask for the password you set while installing.
   1. Once pgAdmin is running, expand servers and then PostgreSQL on the left side, right click database and select create > database, you will need a database called 'workout_tracker', go ahead and create another database called 'workout_tracker_test' in case you ever get into writing backend tests.

1. Create a .env file in the root of this project, we will be putting your local database password env variable here. There is also 1 other key/value pairs you'll need here which is the JWT_SECRET, just have a password generator create something for you here, or just pound away at the keyboard, this is for salting passwords.

   1. DB_PASSWORD=yourPassword
   2. JWT_SECRET=thinkOfSomethingRandomToPutHere

1. We will be using Knex to setup the tables and seed some data, we will need to install knex globally if you don't have it already.
   1. You can check what packages are globally installed on your PC with [npm list -g --depth 0]
   1. Install knex globally with [npm i -g knex]
   1. cd into the /db folder.
   1. Run the command [knex migrate:latest] to create the database tables.
   1. Run the command [knex seed:run] to seed the tables with seed data.

## Resetting a database

During development, we sometimes need to reset the database. These are the commands to make this happen.

First cd into the /db folder, then run these three commands one at a time.

1. node drop_tables.js
2. knex migrate:latest
3. knex seed:run

Your database should be reset and good to go.

## Available Scripts

### `npm start`

Runs the app in whatever mode NODE_ENV is set to, by default that should be 'development'.

## Setup Postman

Postman is a useful tool for API development, we can use it to test sending REST requests to the server without a front end client.

1. Download [postman](https://www.postman.com/downloads/) and install it.
2. You can create a postman account if you want. This will allow you to then install postman on another pc and when you login all your saved network requests will sync up.
3. We have a file in the root of this project called Workout_Tracker.postman_collection.json, import this into postman by clicking on File > Import from within Postman. Find the file Workout_Tracker.postman_collection.json from inside this project.
4. You should now have all the api requests inside a folder called Workout_Tracker with the subfolders User Route, Exercise Route, Workout Logs Route, Workout Route & Set Route.
