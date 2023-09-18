const fs = require("fs");
const sharp = require("sharp");

// Load the image from a file
const inputBuffer = fs.readFileSync("./faizan.jpeg");

// Convert the image to a different format with the desired MIME type
(async () => {
  const outputBuffer = await sharp(inputBuffer).toFormat("png").toBuffer();
  fs.writeFileSync("image.js", outputBuffer);
})();

// Save the converted image to a file with the new MIME type
