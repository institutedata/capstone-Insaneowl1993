require('colors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDb = async () => {
  const connection = await mongoose.connect('mongodb+srv://Insaneowl1993:%40Lightsaber1993@cluster0.trmckal.mongodb.net/HairStylist', {})
  console.log(` DATABASE CONNECTION STATUS:  `, 'Connected'.bgGreen)
  console.log(` DATABASE HOST: [ ${connection.connection.host  || 'LOCALHOST'} ] ` )
}


connectDb()

module.exports = connectDb
