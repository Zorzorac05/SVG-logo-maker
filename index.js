const inquire = require('inquirer');
const {Circle, Triangle, Square} = require("./lib/shapes");
const fs= require('fs');

class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElemnt = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${this.shapeElemnt} ${this.textElement}</svg>` ;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-achor="middle" fill="${color}">${text}</text>`;
    } 

    SetShapeElement(shape) {
        this.shapeElemnt = shape.render();
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: enter up to 3 letters",
    },
    {
        type: "input",
        name: "txtColor",
        message: "Enter the color of the text",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color of the shape",
    },
    {
        type: "input",
        name: "shape",
        message: "Chose the shape of the shape",
    },
]
//writes the file
function writeToFile(fileName, data) {
    console.log(`Writing ${data} to file ${fileName} `);
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("logo created");
    });
}

async function init() {
    const answers = await inquire.prompt(questions);

    let svgString;
    let svgFile = "logo.svg";
    //get shape from inquirer
    let userShapeType = answers['shape'];
    //get shape color
    let userShapeColor = answers['shapeColor'];
    //get text color
    let userTextColor = answers['txtColor'];
    //get text
    let userText = answers['text'];

    let userShape;
    if(userShapeType == 'square'){
        userShape = new Square();
        console.log("square made");
    } else if(userShapeType == 'circle'){
        userShape = new Circle();
        console.log("circle made");
    }else if(userShapeType == 'triangle'){
        userShape = new Triangle();
        console.log("triangle made");
    }else {
        console.log("invalid shape");
    }


    userShape.setColor(userShapeColor);

    let svg = new SVG();
    svg.setTextElement(userText, userTextColor);
    svg.SetShapeElement(userShape);
    svgString = svg.render();

    writeToFile(svgFile, svgString);
    console.log("Shape created");

}

init();