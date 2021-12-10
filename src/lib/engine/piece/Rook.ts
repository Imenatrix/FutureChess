import Piece from '$lib/engine/piece/Piece'

export default class Rook extends Piece {

    char = 'r'

    move(i : number, j : number) {
        const mi = Math.abs(this.i - i)
        const mj = Math.abs(this.j - j)
        if (Math.min(mi, mj) == 0) {
            super.move(i, j)
        }
    }
}