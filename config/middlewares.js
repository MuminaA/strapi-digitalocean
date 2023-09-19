module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      // origin: ['http://localhost:3000', 'https://glittery-dango-ab5a6d.netlify.app']
      origin:['https://glittery-dango-ab5a6d.netlify.app']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
