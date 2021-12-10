import Piece from '$lib/engine/piece/Piece'

export default class Rook extends Piece {

    char = 'r'

    move(i : number, j : number) {
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
                    if (this.board[this.i + sx][this.j + sy]) return
                }
            }
            super.move(i, j)
        }
    }
}