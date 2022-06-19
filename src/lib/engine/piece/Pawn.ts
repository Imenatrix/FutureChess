import Piece from '$lib/engine/piece/Piece'
import type Engine from '../Engine'

export default class Pawn extends Piece {

	char = 'p'
	direction : 1 | -1
	moved = false

	constructor(color : string, engine : Engine, i : number, j : number) {
		super(color, engine, i, j)
		if (color == 'white') {
			this.direction = -1
		}
		else {
			this.direction = 1
		}
	}

	canAttack(i : number, j : number) {
		const {di, dj} = this.generateMovementMetrics(i, j)

		if (i == this.i && j == this.j) return false
		return di == this.direction && Math.abs(dj) == 1
	}

	canMove(i : number, j : number) {
		const {di, dj} = this.generateMovementMetrics(i, j)

		if (i == this.i && j == this.j) return false
		if (!this.moved && di == this.direction * 2 && dj == 0) {
			if (this.board[i][j]) return false
		}
		else if (di == this.direction && dj == 0) {
			if (this.board[i][j]) return false
		}
		else if(di == this.direction && Math.abs(dj) == 1) {
			if (!this.board[i][j]) return false
			if (this.board[i][j]?.color == this.color) return false
		}
		else {
			return false
		}
		return true
	}

	move(i: number, j: number) {
		const moved = super.move(i, j)
		if (!this.moved && moved) {
			this.moved = true
		}
		return moved
	}

}
