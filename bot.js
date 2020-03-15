const Discord = require('discord.js');
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'test') {

       message.reply('im online!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret


client.login('Njg2NTkwNTUxNjc1NzY0NzUw.Xmc3xw.sNAu3oru2mKD88XwJjm4ugsWxns');
