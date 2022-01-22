require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client( {intents: [Intents.FLAGS.GUILDS ]});
const prefix = '.';

client.login(process.env.DISCORD_TOKEN);

client.on('ready', async () => {
    const channel = await client.channels.fetch("812154155615125517");

})