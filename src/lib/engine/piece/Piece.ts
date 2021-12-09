export default class Piece {

    char = 'x'

    color : string
    i : number
    j : number
    board : Array<Array<Piece>>

    constructor(color : string, board : Array<Array<Piece>>, i : number, j : number) {
        this.color = color
        this.board = board
        this.i = i
        this.j = j
    }

    toString() {
        return (this.color == 'white' ? 'w' : 'b') + this.char
    }
}