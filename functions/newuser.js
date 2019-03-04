import TelegramBot from 'node-telegram-bot-api';

exports.handler = async (event, context) => {
    const token = process.env.TELEGRAM_TOKEN;
    const bot = new TelegramBot(token);
    const chatId = process.env.CHAT_ID;
    return bot.sendMessage(chatId, "New user! YAY! 🎉🤑💸")
        .then(() => ({
            statusCode: 200,
            body: `Message has been sent to Telegram 🤗`
        }))
        .catch(error => ({
            statusCode: 422,
            body: `Oops! Something went wrong. ${error}`
        }));
};
