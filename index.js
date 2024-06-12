const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt user for input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 || 'Text must be up to three characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ]);
};

// Function to generate SVG content based on user input
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  let shapeInstance;

  switch (shape) {
    case 'Triangle':
      shapeInstance = new Triangle(shapeColor);
      break;
    case 'Circle':
      shapeInstance = new Circle(shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(shapeColor);
      break;
  }

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;
};

// Function to save SVG to a file
const saveSVG = (svgContent) => {
  const dirPath = path.join(__dirname, 'examples');
  const filePath = path.join(dirPath, 'logo.svg');
  
  // Ensure the directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  
  fs.writeFileSync(filePath, svgContent);
  console.log('Generated logo.svg');
};

// Main function to run the application
const run = async () => {
  try {
    const answers = await promptUser();
    const svgContent = generateSVG(answers);
    saveSVG(svgContent);
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
};

run();
