import Piece from '$lib/engine/piece/Piece'

export default class Knight extends Piece {

	char = 'n'

	canAttack(i : number, j : number) {
		const mi = Math.abs(this.i - i)
		const mj = Math.abs(this.j - j)

		if (i == this.i && j == this.j) return false
		if (mi == 1 && mj == 2 || mi == 2 && mj == 1) {
			return true
		}
	}

}
