const cron = require('node-cron');
const axios = require('axios');

cron.schedule('* * * * * *', async () => {
  try {
    console.log('Making API call...');
    const response = await axios.get('https://hp-node-api.onrender.com/');
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
});

console.log('Cron job started. It will run every minute.');
