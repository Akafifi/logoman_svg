import inquirer from "inquirer"
import fs from 'fs'



inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter a color for your text",
    },
    {
        type: "input",
        name: "shape",
        message: "Please enter a color for your shape",
    },
    {
        type: "list",
        name: "pixel-image",
        message: ["Circle", "Square", "Triangle"],
    },

])