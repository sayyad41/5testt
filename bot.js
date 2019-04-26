const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571135621293146123")
setInterval(function() {
channel.send(`Spamm 5`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
