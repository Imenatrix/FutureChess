import Piece from '$lib/engine/piece/Piece'
import Rook from './Rook'

export default class King extends Piece {

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

	availableMoves() {
		return this.board.map((row, i) => row.map((_, j) => this.canMove(i, j) || this.canMoveCastle(i, j)))
	}

	canMoveCastle(i : number, j : number) {
		{
			const di = i - this.i
			const dj = j - this.j
			const si = Math.sign(di)
			const sj = Math.sign(dj)
			const mi = Math.abs(di)
			const mj = Math.abs(dj)
			if (!(Math.max(mi, mj) == 2 && Math.min(mi, mj) == 0)) return false
			i = si == 1 ? this.board.length - 1 : (si == -1 ? 0 : this.i)
			j = sj == 1 ? this.board[i].length - 1 : (sj == -1 ? 0 : this.j)
		}

		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (Math.min(mi, mj) == 0) {
			for (let x = Math.abs(si); x <= mi; x++) {
				for (let y = Math.abs(sj); y <= mj; y++) {
					const sx = x * si
					const sy = y * sj
					if (this.canCastle(this.i + sx, this.j + sy)) return true
				}
			}
		}
		return false
	}

	canCastle(i : number, j : number) {
		const rook = this.board[i][j]
		const di = i - this.i
		const dj = j - this.j
		const si = Math.sign(di)
		const sj = Math.sign(dj)
		const mi = Math.abs(di)
		const mj = Math.abs(dj)

		if (this.moved) return false
		if (!rook) return false
		if (!(rook instanceof Rook)) return false
		if (rook.color != this.color) return false
		if (rook.moved) return false
		if (this.isPositionUnderAttack(i, j)) return false
		if (mj == 0) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				if (this.board[this.i + sx][this.j]) return false
				if (this.isPositionUnderAttack(this.i + sx, this.j)) return false
			}
		}
		else if (mi == 0) {
			for (let y = Math.abs(sj); y < mj; y++) {
				const sy = y * sj
				if (this.board[this.i][this.j + sy]) return false
				if (this.isPositionUnderAttack(this.i, this.j + sy)) return false
			}
		}
		else if (mi == mj) {
			for (let x = Math.abs(si); x < mi; x++) {
				const sx = x * si
				const sy = x * sj
				if (this.board[this.i + sx][this.j + sy]) return false
				if (this.isPositionUnderAttack(this.i + sx, this.j + sy)) return false
			}
		}
		else {
			return false
		}
		return true
	}

	canMove(i : number, j : number) {
		if (this.isPositionUnderAttack(i, j)) return false
		return super.canMove(i, j)
	}

	moveCastle(i : number, j : number) {
		if (this.canMoveCastle(i, j)) {

			coiso : {
				{
					const di = i - this.i
					const dj = j - this.j
					const si = Math.sign(di)
					const sj = Math.sign(dj)
					const mi = Math.abs(di)
					const mj = Math.abs(dj)
					if (!(Math.max(mi, mj) == 2 && Math.min(mi, mj) == 0)) return false
					i = si == 1 ? this.board.length - 1 : (si == -1 ? 0 : this.i)
					j = sj == 1 ? this.board[i].length - 1 : (sj == -1 ? 0 : this.j)
				}
		
				const di = i - this.i
				const dj = j - this.j
				const si = Math.sign(di)
				const sj = Math.sign(dj)
				const mi = Math.abs(di)
				const mj = Math.abs(dj)
		
				if (Math.min(mi, mj) == 0) {
					for (let x = Math.abs(si); x <= mi; x++) {
						for (let y = Math.abs(sj); y <= mj; y++) {
							const sx = x * si
							const sy = y * sj
							if (this.board[this.i + sx][this.j + sy] instanceof Rook) {
								i = this.i + sx
								j = this.j + sy
								break coiso
							}
						}
					}
				}
			}

			const rook = this.board[i][j]
			const di = i - this.i
			const dj = j - this.j
			const si = Math.sign(di)
			const sj = Math.sign(dj)

			this.board[this.i][this.j] = undefined
			this.i = this.i + (si * 2)
			this.j = this.j + (sj * 2)
			this.board[this.i][this.j] = this
			this.board[rook.i][rook.j] = undefined
			rook.i = this.i - si
			rook.j = this.j - sj
			this.board[rook.i][rook.j] = rook
			return true
		}
		return false
	}

	move(i: number, j: number) {
		let moved = this.moveCastle(i, j)
		if (!moved) {
			moved = super.move(i, j)
		}
		if (!this.moved && moved) {
			this.moved = true
		}
		return moved
	}

}
