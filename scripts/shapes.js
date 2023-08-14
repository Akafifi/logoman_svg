class Shape {
    constructor() {
        this.color = ''
        this.text = ''
        this.shape = ''
        this.textColor = ''
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>
    `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>
    }
    setText(text) {
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setShape(shape) {
        this.shape = shape
    }
}


export class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
        `
    }

}
export class Triangle extends Shape {
    render() {
        return ` <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`

    }
}
export class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />
        `
    }
}

// module.exports = { Circle, Triangle, Square }