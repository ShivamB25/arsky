#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const axios = require('axios');
const cheerio = require('cheerio');
const boxen = require("boxen");

const pathMap = {
    a: 'ab',
    b: 'ab',
    c: 'c',
    s: 's',
    t: 't',
  };

  const defaultPaths = ['def', 'ghi', 'jkl', 'mno', 'pqr', 'uvw', 'xyz'];

  const asciiArtHeader = `
       **             ******** **             
    ****           **////// /**      **   **
   **//**   ******/**       /**  ** //** ** 
  **  //** //**//*/*********/** **   //***  
 ********** /** / ////////**/****     /**   
/**//////** /**          /**/**/**    **    
/**     /**/***    ******** /**//**  **     
//      // ///    ////////  //  //  //      
`





  const usage = chalk.keyword('violet')("\nUsage: arsky -g <name> \n"
    + boxen(chalk.green("\n" + "Get ASCII art or create new one from terminal" + "\n"), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");

const options = yargs
    .usage(usage)
    .option("-g", { alias: "get", describe: "Input text to get art", type: "string", demandOption: false })
    .help(true)
    .argv;

const argv = require('yargs/yargs')(process.argv).argv;


function showHelp(){
    console.log(asciiArtHeader);
    console.log(usage);
    console.log('\nOptions:\r');
    console.log(`\t--version\t      Show version number \t\t[boolean]\r`);
    console.log(`\t-g, --get\t      Get ASCII image from the web\t[string]\r`);
    console.log(`\t-c, --create\t      Create new from your image path\t[string]\r`);
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
  
    return '';
  };

function getAscii(input){
    const path = getUrlPath(input);
    const url = `http://ascii-art.de/ascii/${path}/${input}.txt`;
    axios.get(url)
  .then(response => {
    const html = response.data;
    console.log(html)
    if (html) {
      console.log(asciiArt);
    } else {
      console.log('No ASCII art found in the specified URL.');
    }
  })
  .catch(error => {
    console.error('Error fetching the URL:', error);
  });

}

async function main(){
    var text = yargs.argv.g || yargs.argv.get

    if (text == null) {
        showHelp();
        return;
    }

    if(text !== null){
        getAscii(text)
    }
}

main();
