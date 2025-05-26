import TelegramBot from 'node-telegram-bot-api';

const token = '7122701602:AAEb3dv5enjswtlIyNwfTPQjN7JHQ6q5gHk';
const chatId = '-1002621531560';

export const bot = new TelegramBot(token, { polling: false });
export const telegramChatId = chatId;