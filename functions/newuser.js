const TelegramBot = require('node-telegram-bot-api');

exports.handler = async (event, context) => {
    if (event.headers['origin'] === 'chrome-extension://hmejblemllciaklhffpinjgkbngcoopb') {
        console.log('Yay!');
    } else {
        console.log('Nay');
    }
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "Content-Type"
    };
    const token = process.env.TELEGRAM_TOKEN;
    const bot = new TelegramBot(token);
    const chatId = process.env.CHAT_ID;
    return bot.sendMessage(chatId, "New user! YAY! 🎉🤑💸")
        .then(() => ({
            statusCode: 200,
            headers: headers,
            body: `Message has been sent to Telegram 🤗`
        }))
        .catch(error => ({
            statusCode: 422,
            headers: headers,
            body: `Oops! Something went wrong. ${error}`
        }));
};
