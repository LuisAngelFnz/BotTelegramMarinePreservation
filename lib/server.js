const TelegramBot = require("node-telegram-bot-api");
// const ExplorerController = require("./controllers/ExplorerController");
const token = require('../token')

const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    // const response_bot = ExplorerController.telegramScoreValidationInNumber(msg.text)
    bot.sendMessage(chatId, 'response_bot');

});