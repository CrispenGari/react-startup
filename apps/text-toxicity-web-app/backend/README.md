# What is this backend all about?

This is an express server that is connected to the React-App. This backend server is using MongoDB cloud database and an express server.

## Dependencies used:

- `express`
- `mongoose`
- `cors`
- `http`

## Installation of dependencies

### using npm

to install dependencies using npm run the following command:
`npm install express mongoose cors`

### using yarn

to install dependencies using yarn run the following command

```
yarn add express
yarn add cors
yarn add mongoose
```

## How to test this backend using Postman or browser.

first install nodemon on your machine by running the following command.

## global Installation

`npm install -g nodemon`
Or
`npm install --save-dev nodemon`

## Running the server

After you have connected to mongoose Cloud, and get your credentials, and after you have cloned this repository run the following command.

`nodemon server`

The server will start listening on port 3001 but you can change the port to what you want.

Visit [http://localhost:3001](http://localhost:3001) for the default route, you will be redirected to history route.

## Where to get MongoDB cloud database credentials

To get your own MongoDB credentials, visit [this link](https://cloud.mongodb.com/v2/5fccca5b719bf07442dec8f9#clusters/connect?clusterId=Cluster0) then authenticate you will create clusture and do all those magics to get started.

## Why this backend after all?

This backend was implemented so that we can use it to store our app search history on cloud MongoDB alternatively you can use the following databases

- Firebase
- CouchDB
- MySQL Cloud
- etc
