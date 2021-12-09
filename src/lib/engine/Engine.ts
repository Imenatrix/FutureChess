import type Piece from '$lib/engine/piece/Piece'
import PieceFactory from '$lib/engine/piece/PieceFactory'

const unserializedBoard = [
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
]

export default class Engine {

    board : Array<Array<Piece>>

    constructor() {
        this.board = []
        for (let i = 0; i < unserializedBoard.length; i++) {
            const unserializedRow = unserializedBoard[i]
            const row = []
            for (let j = 0; j < unserializedRow.length; j++) {
                const pieceString = unserializedRow[j]
                const piece = PieceFactory.create(pieceString, i, j)
                row.push(piece)
            }
            this.board.push(row)
        }
    }

    toString() {
        let out = ''
        for (const row of this.board) {
            for (const piece of row) {
                if (piece) {
                    out += piece + ' '
                }
                else {
                    out += '   '
                }
            }
            out += '\n'
        }
        return out
    }
}