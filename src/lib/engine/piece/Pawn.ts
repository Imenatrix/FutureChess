import Piece from '$lib/engine/piece/Piece'

export default class Pawn extends Piece {

	char = 'p'
	direction : 1 | -1
	moved = false

	constructor(color : string, board : Array<Array<Piece>>, i : number, j : number) {
		super(color, board, i, j)
		if (color == 'white') {
			this.direction = -1
		}
		else {
			this.direction = 1
		}
	}

	canMove(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		if (!this.moved && di == this.direction * 2 && dj == 0) {
			if (this.board[i][j]) return false
		}
		else if (di == this.direction && dj == 0) {
			if (this.board[i][j]) return false
		}
		else if(di == this.direction && Math.abs(dj) == 1) {
				if (!this.board[i][j]) return false
				if (this.board[i][j]?.color == this.color) return false
		}
		else {
			return false
		}
		return true
	}

	move(i: number, j: number) {
		super.move(i, j)
		this.moved = true
	}

}
