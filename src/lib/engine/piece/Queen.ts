import Piece from '$lib/engine/piece/Piece'

export default class Queen extends Piece {

    char = 'q'

    move(i : number, j : number) {
        const mi = Math.abs(this.i - i)
        const mj = Math.abs(this.j - j)
        if (Math.min(mi, mj) == 0 || mi == mj) {
            super.move(i, j)
        }
    }

}