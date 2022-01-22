require('dotenv').config();
const { createHandImage } = require('./createHand');

const { Client, Intents } = require('discord.js');
const client = new Client( {intents: [Intents.FLAGS.GUILDS ]});
const prefix = '.';

client.login(process.env.DISCORD_TOKEN);

client.on('ready', async () => {
    console.log('Bot online!');
    const delay = 1000 * 60 * 60 * 8;
    const channel = await client.channels.fetch("812154155615125517");

    setInterval(() => {
        createHandImage()
            .then(() => {
                channel.send({files: ['../hand.png']})
            })
            .catch(e => console.log(e))
    }, delay)
})