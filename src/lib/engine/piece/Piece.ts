export default class Piece {

    char = 'x'

    color : string
    i : number
    j : number

    constructor(color : string, i : number, j : number) {
        this.color = color
        this.i = i
        this.j = j
    }

    toString() {
        return (this.color == 'white' ? 'w' : 'b') + this.char
    }
}