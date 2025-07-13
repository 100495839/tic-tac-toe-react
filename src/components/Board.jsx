import { useEffect, useState } from "react";
import "../styles/Board.css";
import Cell from "./Cell";

const cellState = {
	X: "X",
	O: "O",
	empty: null,
};

const turnState = {
	X: "X",
	O: "O",
};

export default function Board() {
	const [board, setBoard] = useState(Array(9).fill(cellState.empty));
	const [turn, setTurn] = useState(turnState.X);

	const updateCell = (cellID) => {
		setBoard((prevBoard) => {
			if (prevBoard[cellID] === cellState.empty) {
				const newBoard = [...prevBoard];
				newBoard[cellID] = turn;
				return newBoard;
			}
			return prevBoard;
		});
	};

	// Pass turn to the next player
	useEffect(() => {
		setTurn((prevTurn) => {
			return prevTurn === turnState.X ? turnState.O : turnState.X;
		});
	}, [board]);

	const cellsMap = () => {
		return board.map((cell, index) => {
			return (
				<Cell
					key={index}
					id={index}
					content={cell}
					updateCell={updateCell}
				/>
			);
		});
	};

	return <div className="board">{cellsMap()}</div>;
}
