const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is Alive 24/7!'));
app.listen(process.env.PORT || 3000);

const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.on('ready', () => {
    console.log(`${client.user.tag} متصل الآن في القناة!`);
    
    joinVoiceChannel({
        channelId: '1506533945574035469', 
        guildId: '1506533945007800390',   
        adapterCreator: client.guilds.cache.get('1506533945007800390').voiceAdapterCreator,
    });
});

client.login('MTUwNjUzMjE5MDMzMzMwOTAzOA.GrBH-3.VAENdNGKlAjjMeOhk5JfktaPc18fqRG9HSSsNU');
