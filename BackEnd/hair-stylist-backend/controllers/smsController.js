const fetch = require('node-fetch');

const sendSMS = async (message, phoneNumber) => {
  const response = await fetch('https://textbelt.com/text', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: phoneNumber,
      message: message,
      key: 'textbelt',  // Use a real key for production use
    }),
  });

  const responseData = await response.json();
  console.log(responseData);
};

sendSMS('Hello from Textbelt!', '0221532047');  // Replace with a real number

export default sendSMS;