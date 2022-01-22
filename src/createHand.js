const deck = require('./deck.json');
const { createCanvas, loadImage, Image } = require('canvas');
const fs = require('fs');

const generateHand = () => {
    const hand = [];

    const shuffledDeck = deck
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    for(let i = 0; i < 5; i++){
        hand.push(shuffledDeck[0].split(' ').join('-').toLowerCase());
        shuffledDeck.shift();
    }

    createHandImage(hand);
}

const createHandImage = hand => {
    const canvas = createCanvas(1000, 300);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 900, 400);

    let x = 0;

    for(card of hand){
        const img = new Image();
        img.onload = () => ctx.drawImage(img, x, 0, 200, 300);
        img.onerror = err => { throw err }
        img.src = `./images/${card}.png`;

        x += 200;

        const image = canvas.toBuffer('image/png');
        fs.writeFileSync('../hand.png', image);
    }
}

generateHand();