const Discord = require("discord.js");

const client = new Discord.Client();
;
const TOKEN = "NTcyNDk3NzcwMjI5OTIzODUw.XMdOzg.CIuAtklHvpmataWCez_I0LGKkwQ";
const prefix = "v!"
client.on('ready', function() {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login(TOKEN);

