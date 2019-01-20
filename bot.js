const Discord = require("discord.js");

const client = new Discord.Client();
;
const TOKEN = "NTMyMjk1MjMyNjY3MTIzNzQy.DyX5AA.R5rib0I2TeMOJFYOJGDgQi5TyfM";
const prefix = "v!"
client.on('ready', function() {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
    console.log(message.content);
});

client.on('message', function(message){
    if (message.author.equals(client.user)) return;
  
    if (message.content == ("v!help") 
        message.channel.sendMessage("``v!social - socialni site vikturka!``";
    }
});

client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    if (message.content == ("v!social")
        message.channel.sendMessage("Socialni sitě vikturka! Youtube: https://www.youtube.com/channel/UCKXU6VIZdB0CHbNkHChdKxA Instagram: https://www.instagram.com/vikturek.love.you/ Twitter: https://www.twitter.com/VikturekG")
    }
});

client.login(TOKEN);

