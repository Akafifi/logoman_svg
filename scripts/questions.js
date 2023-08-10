import inquirer from "inquirer"
import fs from 'fs'
import { getSvg } from './helpers.js'



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
    const svgContent = getSvg(answers)
    fs.writeFile('logo.svg', svgContent, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    )
})


.catch(error => console.log(error))