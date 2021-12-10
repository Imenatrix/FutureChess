import Piece from '$lib/engine/piece/Piece'

export default class King extends Piece{

    char = 'k'

    move(i: number, j: number) {
        const mi = Math.abs(this.i - i)
        const mj = Math.abs(this.j - j)
        if (Math.max(mi, mj) == 1) {
            super.move(i, j)
        }
    }

}