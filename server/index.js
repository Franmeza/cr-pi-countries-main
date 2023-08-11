const axios = require("axios");
const server = require("./src/server");
// require("dotenv").config();
const { conn } = require('./src/db.js');
const PORT = process.env.PORT 
const countriesLoader = require('./src/utils/loader')

const {Country} = conn.models

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  countriesLoader(axios, Country)
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
