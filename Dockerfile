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

# Switch to production mode
RUN npm run build
RUN npm install serve -g

# Web server port
EXPOSE 5000

# API server port
EXPOSE 8000

# run api and web server
CMD npm run server & npm run prod
