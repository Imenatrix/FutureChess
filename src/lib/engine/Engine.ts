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
        for (const unserializedRow of unserializedBoard) {
            const row = []
            for (const pieceString of unserializedRow) {
                const piece = PieceFactory.create(pieceString)
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