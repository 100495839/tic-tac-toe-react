import { useState } from "react";
import { CELL_STATE, TURN_STATE, BOARD_STATE } from "../constants/constants";
import Board from "./Board";
import RestartButton from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";

export default function Main() {
	const [board, setBoard] = useState(BOARD_STATE.EMPTY);
	const [turn, setTurn] = useState(TURN_STATE.X);

	const updateCell = (cellID) => {
		if (board[cellID] === CELL_STATE.EMPTY) {
			setBoard((prevBoard) => {
				const newBoard = [...prevBoard];
				newBoard[cellID] = turn;
				return newBoard;
			});

			// Pass turn to the next player
			setTurn((prevTurn) => {
				return prevTurn === TURN_STATE.X ? TURN_STATE.O : TURN_STATE.X;
			});
		}
	};

	const restart = () => {
		setBoard(BOARD_STATE.EMPTY);
		setTurn(TURN_STATE.X);
	};

	return (
		<main className="main">
			<Turn turn={turn} />
			<Board board={board} updateCell={updateCell} />
			<RestartButton restart={restart} />
		</main>
	);
}
