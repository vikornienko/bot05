require('dotenv').config()
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.command('sun', (ctx) => {
    // bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendPhoto(ctx.chat.id, {
      source:
        "./src/res/sun.jpg",
    },
    {
    reply_to_message_id: ctx.message.message_id
    });
});
bot.command('goodmorning', (ctx) => {
    bot.telegram.sendPhoto(
      ctx.chat.id,
      {
        source: "./src/res/goodmorning.jpg",
      },
      {
        reply_to_message_id: ctx.message.message_id,
      }
    );
});
bot.command('allmedia', (ctx) => {
    let pictures = ['./src/res/sun.jpg', './src/res/goodmorning.jpg'];
    let result = pictures.map(picture => {
        return {
            type: 'photo',
            media: {
                source: picture
            } 
        }
    })
    bot.telegram.sendMediaGroup(ctx.chat.id, result)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// require("dotenv").config();
// const { Telegraf, InputFile } = require("telegraf");

// const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.start((ctx) => ctx.reply("Welcome"));
// bot.help((ctx) => ctx.reply("Send me a sticker"));

// bot.command("sun", (ctx) => {
//   const photoPath = "./src/res/sun.jpg";
//   const photo = new InputFile(photoPath);
//   bot.telegram
//     .sendPhoto(ctx.chat.id, photo, {
//       reply_to_message_id: ctx.message.message_id,
//     })
//     .catch((error) => console.error("Error sending sun photo:", error));
// });

// bot.command("goodmorning", (ctx) => {
//   const photoPath = "./src/res/goodmorning.jpg";
//   const photo = new InputFile(photoPath);
//   bot.telegram
//     .sendPhoto(ctx.chat.id, photo, {
//       reply_to_message_id: ctx.message.message_id,
//     })
//     .catch((error) => console.error("Error sending goodmorning photo:", error));
// });

// bot.command("allmedia", (ctx) => {
//   const mediaGroup = [
//     {
//       type: "photo",
//       media: new InputFile("./src/res/sun.jpg"),
//     },
//     {
//       type: "photo",
//       media: new InputFile("./src/res/goodmorning.jpg"),
//     },
//   ];

//   bot.telegram
//     .sendMediaGroup(ctx.chat.id, mediaGroup)
//     .catch((error) => console.error("Error sending media group:", error));
// });

// bot.launch();

// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));
