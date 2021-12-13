import Piece from '$lib/engine/piece/Piece'

export default class Knight extends Piece {

	char = 'n'

	canMove(i : number, j : number) {
		const mi = Math.abs(this.i - i)
		const mj = Math.abs(this.j - j)

		if (this.board[i][j]?.color == this.color) return false
		if (mi == 1 && mj == 2 || mi == 2 && mj == 1) {
			return true
		}
	}

}
