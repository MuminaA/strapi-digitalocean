// module.exports = ({ env }) => ({
//   proxy: true,
//   host: "0.0.0.0",
//   port: process.env.PORT,
//   url: env("MY_HEROKU_URL"),
//   app: {
//     keys: env.array("APP_KEYS"),
//   },
//   admin: {
//     auth: {
//       secret: env("ADMIN_JWT_SECRET"),
//     },
//   },
//   // cors: {
//   //   enabled: true,
//   //   // origin: ['http://localhost:3000', "https://glittery-dango-ab5a6d.netlify.app"],
//   //   origin:['*'],
//   // },
// });

module.exports = ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
