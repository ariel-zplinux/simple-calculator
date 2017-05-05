# nodejs 6.9
FROM node:boron
MAINTAINER Ariel Biton (ariel@zplinux.com)

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Web server port
EXPOSE 3000

# API server port
EXPOSE 8000

# run api and web server
CMD npm run server & npm start
