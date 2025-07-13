import { useEffect, useState } from "react";
import { CELL_STATE, TURN_STATE } from "../constants/constants";
import Board from "./Board";
import RestartButton from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";

export default function Main() {
	const [board, setBoard] = useState(Array(9).fill(CELL_STATE.empty));
	const [turn, setTurn] = useState(TURN_STATE.X);

	const updateCell = (cellID) => {
		setBoard((prevBoard) => {
			if (prevBoard[cellID] === CELL_STATE.empty) {
				const newBoard = [...prevBoard];
				newBoard[cellID] = turn;
				return newBoard;
			}
			return prevBoard;
		});

		// Pass turn to the next player
		setTurn((prevTurn) => {
			return prevTurn === TURN_STATE.X ? TURN_STATE.O : TURN_STATE.X;
		});
	};

	const restart = () => {
		// Empty board
		setBoard(() => Array(9).fill(CELL_STATE.empty));

		// Reset turn
		setTurn(TURN_STATE.X);
	};

	return (
		<main className="main">
			<Turn />
			<Board board={board} updateCell={updateCell} />
			<RestartButton restart={restart} />
		</main>
	);
}
