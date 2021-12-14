import Piece from '$lib/engine/piece/Piece'
import Rook from './Rook'

export default class King extends Piece{

	char = 'k'
	moved = false

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

	availableMoves() {
		return this.board.map((row, i) => row.map((_, j) => this.canMove(i, j) || this.canCastle(i, j)))
	}

	canCastle(i : number, j : number) {
		const rook = this.board[i][j]
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		const squaresUnderAttack = this.board.map(
			row => row.filter(piece => piece)
					  .filter(piece => piece.color != this.color)
					  .map(piece => piece.canAttack(i, j))
					  .flat()
		).flat()

		if (this.moved) return false
		if (!rook) return false
		if (!(rook instanceof Rook)) return false
		if (rook.color != this.color) return false
		if (rook.moved) return false
		if (squaresUnderAttack.includes(true)) return false
		if (mj == 0) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				const squaresUnderAttack = this.board.map(
					row => row.filter(piece => piece)
							  .filter(piece => piece.color != this.color)
							  .map(piece => piece.canAttack(this.i + sx, this.j))
							  .flat()
				).flat()

				if (this.board[this.i + sx][this.j]) return false
				if (squaresUnderAttack.includes(true)) return false
			}
		}
		else if (mi == 0) {
			for (let y = Math.abs(sj); y < mj; y++) {
				const sy = y * sj
				const squaresUnderAttack = this.board.map(
					row => row.filter(piece => piece)
							  .filter(piece => piece.color != this.color)
							  .map(piece => piece.canAttack(this.i, this.j + sy))
							  .flat()
				).flat()

				if (this.board[this.i][this.j + sy]) return false
				if (squaresUnderAttack.includes(true)) return false
			}
		}
		else if (mi == mj) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				const sy = x * sj
				const squaresUnderAttack = this.board.map(
					row => row.filter(piece => piece)
							  .filter(piece => piece.color != this.color)
							  .map(piece => piece.canAttack(this.i + sx, this.j + sy))
							  .flat()
				).flat()

				if (this.board[this.i + sx][this.j + sy]) return false
				if (squaresUnderAttack.includes(true)) return false
			}
		}
		else {
			return false
		}
		return true
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

	move(i: number, j: number) {
		const moved = super.move(i, j)
		if (!this.moved && moved) {
			this.moved = true
		}
		return moved
	}

}
