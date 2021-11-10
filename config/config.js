//config for development and production mongodb
const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: "JWT123",
  mongoUri:
    "mongodb+srv://prakhar:Hum77hai%40online@roc8.nkfuj.mongodb.net/socialnetwork?retryWrites=true&w=majority",
};

export default config;
