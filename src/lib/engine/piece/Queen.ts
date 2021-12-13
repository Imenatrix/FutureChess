import Piece from '$lib/engine/piece/Piece'

export default class Queen extends Piece {

	char = 'q'

	canAttack(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

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
		else if (mi == mj) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				const sy = x * sj
				if (this.board[this.i + sx][this.j + sy]) return false
			}
		}
		else {
			return false
		}
		return true
	}
}
