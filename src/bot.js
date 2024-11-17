require('dotenv').config()
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.command('sun', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendPhoto(ctx.chat.id, {
      source:
        "./src/res/sun.jpg",
    },
    {
    reply_to_message_id: ctx.message.message_id
    });
});
bot.command('goodmorning', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "./src/res/goodmorning.jpg"
    })
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
