import Piece from '$lib/engine/piece/Piece'

export default class King extends Piece{

	char = 'k'

	canAttack(i : number, j : number) {
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (i == this.i && j == this.j) return false
		if (Math.max(mi, mj) == 1) {
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

	canMove(i : number, j : number) {
		const squaresUnderAttack = this.board.map(
			row => row.filter(piece => piece)
					  .filter(piece => piece.color != this.color)
					  .map(piece => piece.canAttack(i, j))
					  .flat()
		).flat()
		if (squaresUnderAttack.includes(true)) {
			return false
		}
		return super.canMove(i, j)
	}

}
