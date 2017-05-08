'use strict';

const Hapi = require('hapi');
const {API_SERVER_HOST_INTERNAL, API_SERVER_PORT_INTERNAL} = require('../config/config.js');

// Create a server with a host and port
const server = new Hapi.Server();

const connection_conf = {
    port: API_SERVER_PORT_INTERNAL,
    // host: API_SERVER_HOST_INTERNAL
}

server.connection(connection_conf);

// Add the route
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },    
    method: 'GET',
    path:'/addition', 
    handler: function (request, reply) {
        const value = parseInt(request.query.previous, 10) + parseInt(request.query.current, 10);
        // console.log(value);
        return reply(`${value}`);
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});