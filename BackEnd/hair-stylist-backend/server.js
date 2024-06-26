const express = require('express');
const connectDb = require('./dbConnect');
const cors = require('cors');
const { serviceRoute, appointmentRoute, clientRoute, userRoute } = require('./routes/indexRoute');

require('dotenv').config();

connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ STATUS: 'Connected', MESSAGE: 'Welcome to Konde' });
});


app.use('/api/services', serviceRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/clients", clientRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});