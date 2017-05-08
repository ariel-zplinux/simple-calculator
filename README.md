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

You should change API_SERVER_HOST in src/config/config.js to your WAN or LAN address.

```shell
$ git clone https://github.com/ariel-zplinux/simple-calculator.git
$ cd simple-calculator
$ npm install
$ npm run server # API server on http://host:8000
```

Then, in a separate terminal.

For development mode:

```shell
$ npm start # Web server on http://host:3000
```

Or for production mode

```shell
$ npm run build
$ npm install serve -g
$ npm run prod # Web server on http://host:5000
```

Or with Docker

```shell
$ git clone https://github.com/ariel-zplinux/simple-calculator.git
$ cd simple-calculator
$ docker build -t "simple-calculator" .
$ docker run -p 5000:5000 -p 8000:8000 "simple-calculator" 
```

Manual
------

- Enter a first number

- Enter +

- Enter a second number

- Enter =

Then it's possible to go on additionning numbers

C button resets the calculator


NPM Commands
------------

|Command|Description|
|---|---|
|npm run server|Start API server @**localhost:8000**| 
|npm start|Start web server in development mode @**localhost:3000**| 
|npm run build|Prepare production mode|
|npm run prod|Start web server in production mode @**localhost:5000**|
|npm install|Install dependencies |

API endpoint
-------------

|HTTP Method|Url|Parameters|Description|
|---|---|---|---|
|GET|/addition|previous, current|Add previous and current|

Screenshot
----------
![alt text](https://github.com/ariel-zplinux/simple-calculator/raw/master/src/assets/images/calculator.jpg "Simple-calculator on Nexus 4")

Links
-----

- Hapi (API framework) - [https://hapijs.com/](https://hapijs.com/)
- Create-React-App (Facebook React Starter Kit) [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

