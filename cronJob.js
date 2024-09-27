const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const PORT = 8080;

// Cron job: Runs every minute
cron.schedule('* * * * *', async () => {
  try {
    console.log('Making API call...');
    const response = await axios.get('https://hp-node-api.onrender.com/');
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
});

// Start the server on port 8080
app.get('/', (req, res) => {
  res.send('Server is running along with the cron job!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Cron job started. It will run every minute.');
});
