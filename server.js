import express from 'express';
import cors from 'cors';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Telegram bot setup
const token = '7122701602:AAEb3dv5enjswtlIyNwfTPQjN7JHQ6q5gHk';
const chatId = '-1002621531560';
const bot = new TelegramBot(token, { polling: false });

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const telegramMessage = `
New Contact Form Submission:
---------------------------
Name: ${name}
Email: ${email}
Message: ${message}
---------------------------
`;

    await bot.sendMessage(chatId, telegramMessage);
    
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});