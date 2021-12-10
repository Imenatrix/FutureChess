import Piece from '$lib/engine/piece/Piece'

export default class Pawn extends Piece {

    char = 'p'
    direction : 1 | -1

    constructor(color : string, board : Array<Array<Piece>>, i : number, j : number) {
        super(color, board, i, j)
        if (color == 'white') {
            this.direction = -1
        }
        else {
            this.direction = 1
        }
    }

    move(i: number, j: number) {
        const di = this.i - i
        const dj = this.j - j
        if (di == this.direction && dj == 0) {
            super.move(i, j)
        }
    }

}