import { bot, telegramChatId } from '../config/telegram.js';

export const handleContactForm = async (req, res) => {
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

    await bot.sendMessage(telegramChatId, telegramMessage);
    
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};