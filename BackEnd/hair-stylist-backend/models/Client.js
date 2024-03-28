const  mongoose = require('mongoose')
const  appointmentSchema = require('./Appointment')
const TAG = 'Client'


const ClientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            match: [
               /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please enter a valid Email"
            ],
            unique: true,
            appointments: [appointmentSchema],
        },

      }, {
        timestamps: true,
        collection: TAG
      }
    )

const Client = mongoose.model(TAG, ClientSchema)
module.exports = [Client ];