import Piece from '$lib/engine/piece/Piece'

export default class King extends Piece{

    char = 'k'

    move(i: number, j: number) {
        const di = i - this.i
        const dj = j - this.j
        const si = Math.sign(di)
        const sj = Math.sign(dj)
        const mi = Math.abs(di)
        const mj = Math.abs(dj)

		if (this.board[i][j]?.color == this.color) return
        if (Math.max(mi, mj) == 1) {
            if (mj == 0) {
				for (let x = Math.abs(si); x < mi; x++) {
					const sx = x * si
					if (this.board[this.i + sx][this.j]) return
				}
			}
			else if (mi == 0) {
				for (let y = Math.abs(sj); y < mj; y++) {
					const sy = y * sj
					if (this.board[this.i][this.j + sy]) return
				}
			}
			else if (mi == mj) {
				for (let x = Math.abs(si); x < mi; x++) {
					const sx = x * si
					const sy = x * sj
					if (this.board[this.i + sx][this.j + sy]) return
				}
			}
			else {
				return
			}
			super.move(i, j)
        }
    }

}
