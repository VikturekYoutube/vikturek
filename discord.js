const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjM5MTM1MTA0MzQ1ODMzNDky.Xbm3Cg.X-g1dGrUSNeM5s2K52lV2wyF9lY';

bot.on('ready', () =>{
    console.log('This Bot is online!');
})

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'ihelp',
            type: "STREAMING",
            url: "https://bit.ly/2JAsCO2"
        }
    });
});

bot.on('message', msg=>{
    if(msg.content === "ihelp"){
        msg.reply("**Odkazy=>** __iodkazy__    (TO JE ASI VSECHNO ZATíM)");
    }
})

bot.on('message', msg=>{
    if(msg.content === "cs"){
        msg.reply("Nazdaaar!");
    }
})

bot.on('message', msg=>{
    if(msg.content === "ieve"){
        msg.reply("@everyone");
    }
})

bot.on('message', msg=>{
    if(msg.content === "idk"){
        msg.reply("🤷🤷🤷🤷🤷");
    }
})

bot.on('message', msg=>{
    if(msg.content === "iodkazy"){
        msg.reply("**YOUTUBE:** https://bit.ly/2JAsCO2                          **INSTA:** https://bit.ly/2BUKgrt                  **DISCORD LINK:** https://discord.gg/E8XYQ92");
    }
})


bot.login(token);
