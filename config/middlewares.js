const cors = require("cors");

module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000', "https://glittery-dango-ab5a6d.netlify.app"], // Replace with your frontend URL
    },
  },
};

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
