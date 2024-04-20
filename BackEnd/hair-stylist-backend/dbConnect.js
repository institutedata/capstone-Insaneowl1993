// dbConnect.js
require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(` DATABASE CONNECTION STATUS: `, 'Connected'.bgGreen);
    console.log(` DATABASE HOST: [ ${connection.connection.host} ] `);
  } catch (error) {
    console.error(` Error connecting to the database: `.bgRed, error.message);
    process.exit(1);
  }
};

connectDb();

module.exports = connectDb;
