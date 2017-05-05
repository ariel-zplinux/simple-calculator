# Simple calculator with Node and React

A basic calculator application that allows:

- to add 2 number
- to perform this addition remotely through an API call

Using Node, Hapi and React.

This project was bootstrapped with [Create React App]

Stack
-----

- Nodejs (>= v6)
- Nvm
- Hapi
- React
- Docker

Quick Start
-----------

You should change SERVER_HOST in src/config/config.js to your WAN or LAN address.

```shell
$ git clone https://github.com/ariel-zplinux/simple-calculator.git
$ cd simple-calculator
$ npm install
$ npm run server
$ npm start # in a separate terminal
```

Or with Docker

```shell
$ git clone https://github.com/ariel-zplinux/simple-calculator.git
$ cd simple-calculator
$ docker build -t "simple-calculator" .
$ docker run -p 3000:3000 -p 8000:8000 "simple-calculator" 
```



NPM Commands
------------

|Command|Description|
|---|---|
|npm run server|Start API server @**localhost:8000**| 
|npm start|Start web server @**localhost:3000**| 
|npm install|Install dependencies |

API endpoint
-------------

|HTTP Method|Url|Parameters|Description|
|---|---|---|---|
|GET|/addition|previous, current|Add previous and current|


Links
-----

- Hapi (API framework) - [https://hapijs.com/](https://hapijs.com/)
- Create-React-App (Facebook React Starter Kit) [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

