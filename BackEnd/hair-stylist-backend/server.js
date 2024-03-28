const express = require('express')
const { clientRoute } = require('./routes')
const connectDb = require('./dbConnect')
const appointmentRoute = require('./routes/appointmentRoute');
const { Client } = require('./models');
const {serviceRoute} = require('./routes');
// let dbConnect = require('./dbConnect')// Add body-parser for parsing JSON requests

connectDb()


const app = express()
// add to .env
const PORT = 3000

// Middleware to parse JSON requests
app.use(express.json())

app.get('/' , (req, res) => {
  res.json({ STATUS: 'Connected', MESSAGE: 'Welcome to Hair Stylist Server'})
})

app.use('/api', serviceRoute)
app.use("/api/", appointmentRoute);
app.use("/api/client", clientRoute);
app.use('/api', serviceRoute);

app.post('/api/appointment', async (req, res) => {
  try {
    const { date, description } = req.body;
    const { clientId } = req.params;

    const client = await Client.findById(clientId);

    if (!client) {
      return res.status(404).send('Client not found');
    }

    const newAppointment = {
      date,
      description,
    };

    client.appointments.push(newAppointment);

    await client.save();

    res.status(201).send('Appointment added');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



