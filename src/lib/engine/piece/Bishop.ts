import Piece from '$lib/engine/piece/Piece'

export default class Bishop extends Piece{

	char = 'b'

	canAttack(i : number, j : number) {
		const {si, sj, mi, mj} = this.generateMovementMetrics(i, j)

		if (i == this.i && j == this.j) return false
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
