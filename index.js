const { Telegraf } = require("telegraf");

const bot = new Telegraf("7823920590:AAH4cmrYaVt7BsYftnQZWfT3aHmNAoUQo0Q");

bot.start((ctx)=>{
    ctx.reply("Bot has Started")
})

bot.launch();