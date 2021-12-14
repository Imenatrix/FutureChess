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
		return this.board.map((row, i) => row.map((_, j) => this.canMove(i, j)))
	}

	squaresUnderAttack() {
		return this.board.map((row, i) => row.map((_, j) => this.canAttack(i, j)))
	}

	canMove(i : number, j : number) {
		if (this.board[i][j]?.color == this.color) return false
		return this.canAttack(i, j)
	}

	canAttack(i : number, j : number) {
		return false
	}

	move(i : number, j :  number) {
		if (this.canMove(i, j)) {
			this.board[this.i][this.j] = undefined
			this.i = i
			this.j = j
			this.board[this.i][this.j] = this
			return true
		}
		return false
	}

	isPositionUnderAttack(i : number, j : number) {
		const squaresUnderAttack = this.board.map(
			row => row.filter(piece => piece)
					  .filter(piece => piece.color != this.color)
					  .map(piece => piece.canAttack(i, j))
					  .flat()
		).flat()
		return squaresUnderAttack.includes(true)
	}

	toString() {
		return (this.color == 'white' ? 'w' : 'b') + this.char
	}
}
