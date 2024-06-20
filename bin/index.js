#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const axios = require("axios");
const sharp = require("sharp");
const boxen = require("boxen");

const pathMap = {
  a: "ab",
  b: "ab",
  c: "c",
  s: "s",
  t: "t",
};

const defaultPaths = ["def", "ghi", "jkl", "mno", "pqr", "uvw", "xyz"];

const asciiArtHeader = `
     **             ******** **             
    ****           **////// /**      **   **
   **//**   ******/**       /**  ** //** ** 
  **  //** //**//*/*********/** **   //***  
 ********** /** / ////////**/****     /**   
/**//////** /**          /**/**/**    **    
/**     /**/***    ******** /**//**  **     
//      // ///    ////////  //  //  //      
`;

const usage = chalk.keyword("violet")(
  "\n\n" +
    boxen(
      chalk.green(
        "\n" + "Get ASCII art or create new one from terminal" + "\n"
      ),
      { padding: 1, borderColor: "green", dimBorder: true }
    ) +
    "\n"
);

const options = yargs
  .usage(usage)
  .option("-g", {
    alias: "get",
    describe: "Input text to get art",
    type: "string",
    demandOption: false,
  })
  .option("-c", {
    alias: "create",
    describe: "Input path to create art",
    type: "string",
    demandOption: false,
  })
  .help(true).argv;

const argv = require("yargs/yargs")(process.argv).argv;

function showHelp() {
  console.log(asciiArtHeader);
  console.log(usage);
  console.log("\nOptions:\r");
  console.log(`\t--version\t      Show version number \t\t[boolean]\r`);
  console.log(`\t-g, --get\t      Get ASCII image from the web\t[string]\r`);
  console.log(
    `\t-c, --create\t      Create new from your image path\t[string]\r`
  );
  console.log(`\t--help\t\t      Show help.\t\t\t[boolean]\n`);
}

const getUrlPath = (input) => {
  const firstLetter = input.charAt(0).toLowerCase();

  if (pathMap[firstLetter]) {
    return pathMap[firstLetter];
  }

  for (const path of defaultPaths) {
    if (path.includes(firstLetter)) {
      return path;
    }
  }

  return "";
};

async function getAscii(input) {
  const path = getUrlPath(input);
  const url = `http://ascii-art.de/ascii/${path}/${input}.txt`;
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      console.log(html);
      if (html) {
        console.log(asciiArt);
      } else {
        console.log(
          "No ASCII art found in the specified text. Do you want to create your own?"
        );
      }
    })
    .catch((error) => {
      // console.error('Error fetching art!');
    });
}
async function generateAsciiArt(imagePath, maxWidth = 80) {
  try {
    // Resize the image and convert it to grayscale
    const { data, info } = await sharp(imagePath)
      .resize({ width: maxWidth, withoutEnlargement: true }) // Maintain aspect ratio
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height } = info;

    // Define the characters to represent different intensities (more detailed)
    const characters = 
      " .`'^\",:;Il!i<>~+_-?][}{1()|/ftjxrnuvcXzYUJCLQ0OZmwpqbdkhao*#MW&8%B@$";
    const numChars = characters.length - 1;

    // Initialize empty ASCII art string
    let asciiArt = '';

    // Iterate through each pixel row
    for (let y = 0; y < height; y += 2) { // Adjusting y increment to compress vertically
      // Iterate through each pixel column
      for (let x = 0; x < width; x++) {
        // Calculate the index of the pixel in the raw data buffer
        const pixelIndex = y * width + x;

        // Get grayscale pixel value (0-255)
        const pixelBrightness = data[pixelIndex];

        // Calculate corresponding character based on pixel brightness
        const charIndex = Math.floor((pixelBrightness / 255) * numChars);

        // Append character to ASCII art string
        asciiArt += characters[charIndex];
      }
      asciiArt += '\n'; // Newline after each row of ASCII characters
    }

    // Output the ASCII art to console or save to file
    console.log(asciiArt);

  } catch (err) {
    console.error('Error generating ASCII art:', err);
  }
}


async function main() {
  var text = yargs.argv.g || yargs.argv.get;
  var imgPath = yargs.argv.c || yargs.argv.create;

  if (text == null && imgPath == null) {
    showHelp();
    return;
  }

  if (text !== null && text !== undefined) {
    await getAscii(text);
    return;
  }

  if (imgPath !== null && imgPath !== undefined) {
    generateAsciiArt(imgPath, 50);
    return;
  }
}

main();
