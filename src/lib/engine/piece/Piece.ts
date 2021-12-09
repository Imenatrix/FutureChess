export default class Piece {

    char = 'x'

    color : string

    constructor(color) {
        this.color = color
    }

    toString() {
        return (this.color == 'white' ? 'w' : 'b') + this.char
    }
}