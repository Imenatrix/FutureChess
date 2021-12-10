import Piece from '$lib/engine/piece/Piece'

export default class Bishop extends Piece{

    char = 'b'

    move(i : number, j : number) {
        const mi = Math.abs(this.i - i)
        const mj = Math.abs(this.j - j)
        if (mj == mi) {
            super.move(i, j)
        }
    }

}