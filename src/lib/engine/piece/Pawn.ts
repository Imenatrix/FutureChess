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
        const di = i - this.i
        const dj = j - this.j
        if (di == this.direction && dj == 0) {
            if (this.board[i][j]) return
            super.move(i, j)
        }
		else if(di == this.direction && Math.abs(dj) == 1) {
			if (this.board[i][j]) {
				if (this.board[i][j]?.color == this.color) return
				super.move(i, j)
			}
		}
    }

}
