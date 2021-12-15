import Piece from '$lib/engine/piece/Piece'

export default class Queen extends Piece {

	char = 'q'

	canAttack(i : number, j : number) {
		const {si, sj, mi, mj} = this.generateMovementMetrics(i, j)

		if (i == this.i && j == this.j) return false
		if (Math.min(mi, mj) == 0) {
			for (let x = Math.abs(si); x <= mi - Math.abs(si); x++) {
				for (let y = Math.abs(sj); y <= mj - Math.abs(sj); y++) {
					const sx = x * si
					const sy = y * sj
					if (this.board[this.i + sx][this.j + sy]) return false
				}
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
