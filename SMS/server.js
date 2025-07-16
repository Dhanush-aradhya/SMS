require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Endpoint to send SMS
app.post('/sendSMS', async (req, res) => {
  const { to, body } = req.body;

  try {
    const message = await client.messages.create({
      from: '+17754383968', // Replace with your Twilio phone number
      to,
      body,
    });
    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SMS server is running on http://localhost:${PORT}`);
}); 