// Start of JS file
// Would be where user input is gathered;
// require inquirer, fs, generateSVG.js function (createSVG)
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./generateSVG');

// This is to validate if the text input is greater than 3 characters,
// it needs to be changed to less than or equal to 3 characters.
const textLengthValidate = async (text) =>
{
  if (text.length > 3)
  {
    return "Text must be 3 characters or less.";
  }
  return true;
}

// The UI (user input) class which constructs the four input values,
// sets them all to default empty strings.
class UI {
    constructor() {
        // this.<value> = default;
        // text, text_color, shape, shape_color
        this.text = '';
        this.text_color = '';
        this.shape = '';
        this.shape_color = '';
    }
    // Run function, will run the inquirer prompts for user input.
    run() {
      return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Welcome to the SVG Generator! What text would you like to display? (Up to three characters)',
                validate: textLengthValidate, // will give the error return message if over 3 characters; must backspace.
            },
            {
                type: 'input',
                name: 'text_color',
                message: 'What color shall the text be? (Can be a color keyword or a hexadecimal)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Which shape did you want for the logo?',
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                name: 'shape_color',
                message: 'What color shall the shape be? (Can be a color keyword or a hexadecimal)',
            }
        ])
        .then((answers) => 
        {
          // logo.svg is written here to /examples directory
          return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          createSVG(answers.text, answers.text_color, answers.shape, answers.shape_color)
          );
      })  
      .then(() => console.log('Created logo.svg')) // lets user know if logo.svg was created successfully
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.'); // otherwise, an error occurs.
      });
    }
}      
  
  module.exports = UI;
  // End of JS file