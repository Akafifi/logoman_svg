class Shape {
    constructor() {
        this.color = ''
    },

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${answers.shape}" />
        `
    }

},
class Triangle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${answers.shape}" />
        `
    }
},
class Square extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${answers.shape}" />
        `
    }
},
}

module.exports = {Circle, Triangle, Square}