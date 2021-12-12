import Pawn from '$lib/engine/piece/Pawn'
import King from '$lib/engine/piece/King'
import Queen from '$lib/engine/piece/Queen'
import Bishop from '$lib/engine/piece/Bishop'
import Knight from '$lib/engine/piece/Knight'
import Rook from '$lib/engine/piece/Rook'
import type Piece from '$lib/engine/piece/Piece'

const pieces = {
	'p' : Pawn,
	'k' : King,
	'q' : Queen,
	'b' : Bishop,
	'n' : Knight,
	'r' : Rook,
}

const colors = {
	'w' : 'white',
	'b' : 'black'
}

export default class PieceFactory {
	static create(pieceString : string, board : Array<Array<Piece>>, i : number, j : number) {
		const colorChar = pieceString[0]
		const pieceChar = pieceString[1]
		if (pieceChar in pieces && colorChar in colors) {
			const piece = pieces[pieceChar]
			const color = colors[colorChar]
			return new piece(color, board, i, j)
		}
	}
}
