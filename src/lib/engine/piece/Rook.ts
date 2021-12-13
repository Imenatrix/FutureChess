import Piece from '$lib/engine/piece/Piece'

export default class Rook extends Piece {

	char = 'r'

	canMove(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (i == this.i && j == this.j) return false
		if (this.board[i][j]?.color == this.color) return false
		if (mj == 0) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				if (this.board[this.i + sx][this.j]) return false
			}
		}
		else if (mi == 0) {
			for (let y = Math.abs(sj); y < mj; y++) {
				const sy = y * sj
				if (this.board[this.i][this.j + sy]) return false
			}
		}
		else {
			return false
		}
		return true
	}
}
