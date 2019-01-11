const Discord = require("discord.js");

const client = new Discord.Client();
;
const TOKEN = "NTMyMjk1MjMyNjY3MTIzNzQy.DxaaOg.B-OY4bHbaBIU0hEiOA-8RW-MIZo";
const prefix = "v!"
client.on('ready', function() {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', function(message) {
    console.log(message.content);
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "Ahoj") {
        message.channel.sendMessage("Ahoj Vítej Zpět!");
    }
});

client.on('message', function(message){
    if (message.content == "v!trigger") 
    {
        message.channel.reply(`Napiš - pls trigger **@ČLOVĚK**`);
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!vikturek") {
        message.channel.sendMessage("Ted zrovna Vikturek Bude natacet videa z Minecraftu takze bude content!");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!info") {
        message.channel.sendMessage("``Prefix= v!(Píšu se jen s malým (v)           Help= v!help");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "cs") {
        message.channel.sendMessage("Ahoj Vítej Zpět!");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!help") {
        message.channel.sendMessage("``v!vikturek - Ohledně Vikturka!             v!odber - Kanal Vikturka!               v!info - Info O Botovi!                 v!trigger - command na trigger gif                 v!nice - command na Nice gif``");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!odber") {
        message.channel.sendMessage("Ahoj Všichni Nezapomente Dat Like a Odběr Vikturkovi Kanal: https://www.youtube.com/channel/UCKXU6VIZdB0CHbNkHChdKxA");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!nice") {
        message.channel.sendMessage("**Napiš !nice**");
    }
});

client.on('message', function(message){
    if (message.content == "v!trigger") 
    {
        message.channel.reply("``Napiš - pls trigger *@ČLOVĚK*``");
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == "v!vikturek") {
        message.channel.sendMessage("``Ted zrovna Vikturek Bude na Horach zase xD ale potom az prijede bude dobry video z minecraftu takze se muzete tesit :)!``");
    }
});

client.login(TOKEN);
