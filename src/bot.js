require('dotenv').config();
const { createHandImage } = require('./createHand');

const { Client, Intents } = require('discord.js');
const client = new Client( {intents: [Intents.FLAGS.GUILDS ]});
const channelID = process.env.CHANNEL_ID;

client.login(process.env.DISCORD_TOKEN);

client.on('ready', async () => {
    console.log('Bot online!');
    const delay = 1000 * 60 * 60 * 8;
    const channel = await client.channels.fetch(`${channelID}`);

    setInterval(() => {
        createHandImage()
            .then(() => {
                channel.send({files: ['../hand.png']})
            })
            .catch(e => console.log(e))
    }, delay)
})