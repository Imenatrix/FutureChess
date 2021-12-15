import Piece from '$lib/engine/piece/Piece'

export default class Rook extends Piece {

	char = 'r'
	moved = false

	canAttack(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (i == this.i && j == this.j) return false
		if (Math.min(mi, mj) == 0) {
			for (let x = Math.abs(si); x <= mi - Math.abs(si); x++) {
				for (let y = Math.abs(sj); y <= mj - Math.abs(sj); y++) {
					const sx = x * si
					const sy = y * sj
					if (this.board[this.i + sx][this.j + sy]) return false
				}
			}
			return true
		}
		return false
	}

	move(i: number, j: number) {
		const moved = super.move(i, j)
		if (!this.moved && moved) {
			this.moved = true
		}
		return moved
	}
}
