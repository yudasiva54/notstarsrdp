const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7769851057:AAGHqMXhWX5Z7Hcz8yPZ7GnNTqvp7xFmEhI";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express();
app.use(express.json());
const web_link = "https://notstarsapps.netlify.app";
const community_link = "https://t.me/notstars_channel";

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;

    ctx.replyWithMarkdownV2(`*Hey, ${userName}\\! Welcome to @notstarsapps\\_bot⭐️*\n\n` +
        `Your task is to become the best of the best in the player rating\\. \n` +
        `Vote for others by stars and collect stars yourself⭐️\n\n` +
        `The coolest majors will receive a valuable TON\\! 💎`, {
        parse_mode: "MarkdownV2",
        reply_markup: {
            inline_keyboard: [
                [{ text: "Open App", web_app: { url: urlSent } }],
                [{ text: "Join Community", url: community_link }]
            ]
        },
    });
});

bot.launch();

app.listen(3000, () => {
    console.log("server is me and now running")
});
