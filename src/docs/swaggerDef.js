const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Node App',
    version,
    license: {
      name: 'Purnashis Hazra',
      url: '',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/`,
    },
  ],
};

module.exports = swaggerDef;
