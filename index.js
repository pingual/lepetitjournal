const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if(message.author.bot) return;

    message.guild.member(client.user).setNickname(message.author.username);


    message.channel.send(message, {
        tts: true
       });
});

client.login('ODIyMDk2NTg1ODY0NzczNjMz.YFNTGw.rjIXoW_J3eOIQ-NuhnWhLGnCMDw');