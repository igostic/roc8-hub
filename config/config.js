//config for development and production mongodb
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "JWT123",
  mongoUri:
    "mongodb+srv://prakhar:Hum77hai%40online@roc8.nkfuj.mongodb.net/socialnetwork?retryWrites=true&w=majority",
};

export default config;
