import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handlePlay(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updateBoard[rowIndex][colIndex] = activePlayerSymbol
            return updateBoard
        })

        onSelectSquare()
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => handlePlay(rowIndex, colIndex)}>{col}</button>
                            </li>
                        )}</ol>
                </li>)}
        </ol>
    )
}  