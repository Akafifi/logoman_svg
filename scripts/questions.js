import inquirer from "inquirer"
import fs from 'fs'
import { getSvg } from './helpers.js'
import { Circle, Triangle, Square } from "./shapes.js"


inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters",
    },
    {
        type: "input",
        name: "color",
        message: "Please enter a color for your text",
    },
    {
        type: "input",
        name: "shape",
        message: "Please enter a color for your shape",
    },
    {
        type: "list",
        name: "logo",
        choices: ["Circle", "Square", "Triangle"],
    },

])

    .then((answers) => {
        console.log(answers)
            let shape
            if(answers.logo === 'Circle') {
                shape = new Circle()
            } else if(answers.logo === 'Square') {
                shape = new Square()
            } else {
                shape = new Triangle()
            }
            shape.setColor(answers.shape)
            shape.setText(answers.text)
            shape.setTextColor(answers.color)
            shape.setShape(shape)
        
            console.log(shape)

        const svgContent = getSvg(answers)
        fs.writeFile('logo.svg', shape.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        )
    })


    .catch(error => console.log(error))