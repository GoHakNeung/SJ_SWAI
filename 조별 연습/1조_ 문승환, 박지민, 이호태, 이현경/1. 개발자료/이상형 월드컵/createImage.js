const fs = require('fs');
const { createCanvas } = require('canvas');

function createImages() {
  for (let i = 1; i <= 32; i++) {
    const canvas = createCanvas(100, 100);
    const context = canvas.getContext('2d');
    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.font = 'bold 40px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(i.toString(), canvas.width / 2, canvas.height / 2);

    const buffer = canvas.toBuffer('image/png');
    const fileName = `image${i}.png`;

    fs.writeFileSync(fileName, buffer);
    console.log(`Image ${fileName} created.`);
  }
}

createImages();
