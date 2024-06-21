# ArSky

     **             ******** **             
    ****           **////// /**      **   **
   **//**   ******/**       /**  ** //** ** 
  **  //** //**//*/*********/** **   //***  
 ********** /** / ////////**/****     /**   
/**//////** /**          /**/**/**    **    
/**     /**/***    ******** /**//**  **     
//      // ///    ////////  //  //  //      



ArSky is a powerful and easy-to-use Node.js CLI tool for generating or fetching ASCII art. Using this tool, you can either get ASCII art for any word you write or create your own by providing the path to an image.

## Features

- Fetch a collection of ASCII art for a given word.
- Create your own ASCII art from an image file.

## Installation

Install ArSky globally using npm:

```sh
npm install -g arsky
```

## Usage

ArSky can be used with the following options:

### Options

- `-g, --get`: Input text to get ASCII art.
- `-c, --create`: Input the path to an image file to create ASCII art.

### Examples

#### Get ASCII Art for a Word

To fetch ASCII art for a word, use the `-g` or `--get` option:

```sh
arsky -g coffee
```

This command will fetch and display ASCII art related to the word "coffee".

### Create ASCII Art from an Image

To create ASCII art from an image file, use the -c or --create option:

```sh
arsky -c path/to/your/image.png
```

This command will create and display ASCII art from the specified image file.

### More Options and Help
For more options and detailed usage instructions, you can use the --help flag with any command:

## Contributing
Contributions are welcome! If you encounter any bugs, have suggestions for new features, or want to contribute code, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.







