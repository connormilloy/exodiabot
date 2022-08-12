# ExodiaBot

Fun little project built in an evening, based off of [ExodiaBot](https://www.facebook.com/ExodiaBot0005/) on Facebook. Every 8 hours (this currently happens via a setInterval loop, but ideally would be done via a Cron invoking a script) the bot will run the scripts necessary to generate a new Yu-Gi-Oh hand of 5 cards, generate a new .png image to display it, and then send it to a discord server.

The 'deck' that the bot is selecting the cards from is based on Yugi's deck from the original Yu-Gi-Oh anime.

## Example Output

![Exodia Bot Hand](https://i.imgur.com/v8icwAr.png, "Exodia Bot Hand")

## Technologies Used
- Canvas
- Discord.js