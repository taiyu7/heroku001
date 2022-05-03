const Discord = require('discord.js');
const { appendFile } = require('fs');
const { getMaxListeners } = require('process');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === '決鬥吧') {
    msg.reply('你的格鬥技巧是不是數學老師教的');
  }
});

client.login('OTY5ODczMjA0OTU5MTQxODg4.Ymzuzw.Xx666wwV4EbOERZAyjuEHrmrfuo');

