import Piece from '$lib/engine/piece/Piece'

export default class Bishop extends Piece{

	char = 'b'

	canMove(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (i == this.i && j == this.j) return false
		if (this.board[i][j]?.color == this.color) return false
		if (mj == mi) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				const sy = x * sj
				if (this.board[this.i + sx][this.j + sy]) return false
			}
			return true
		}

	}
}
