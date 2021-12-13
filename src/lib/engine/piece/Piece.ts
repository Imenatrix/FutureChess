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

	availableMoves() {
		const moves = []
		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				if (this.canMove(i, j)) {
					moves.push({
						i : i,
						j : j
					})
				}
			}
		}
		return moves
	}

	canMove(i : number, j : number) {
		return false
	}

	move(i : number, j :  number) {
		if (this.canMove(i, j)) {
			this.board[this.i][this.j] = undefined
			this.i = i
			this.j = j
			this.board[this.i][this.j] = this
		}
	}

	toString() {
		return (this.color == 'white' ? 'w' : 'b') + this.char
	}
}
