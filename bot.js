require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'who is the best player?') {
    msg.reply('Bloomberg');
  }
});
client.on('message', msg => {
  if (msg.content === 'who is the dictator') {
    msg.reply('VooDoo!');
  }
});
client.on('message', msg => {
  if (msg.content === 'is ryuk too strong?') {
    msg.reply('yes omg pls nerf');
  }
  if (msg.content === 'test') {
    msg.reply('hey!');
  }
});


client.login('Njg2NTkwNTUxNjc1NzY0NzUw.Xmc3xw.sNAu3oru2mKD88XwJjm4ugsWxns');
