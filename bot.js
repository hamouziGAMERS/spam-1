const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550094910158798850")
setInterval(function() {
channel.send(`DAMN LIFE IAM PRO SUDDEN ATTACK JAPAN FUCK LIFE`);
}, 100)
})

client.login(process.env.BOT_TOKEN);
