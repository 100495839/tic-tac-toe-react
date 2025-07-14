import { useEffect, useRef, useState } from "react";
import {
	CELL_STATE,
	TURN_STATE,
	BOARD_STATE,
	GAME_RESULT,
} from "../constants/constants";
import { checkGameResult } from "../logic/logic";

export function useGame() {
	const [board, setBoard] = useState(BOARD_STATE.EMPTY);
	const [turn, setTurn] = useState(TURN_STATE.X);
	const [game, setGame] = useState({
		status: GAME_RESULT.CONTINUE,
		winner: null,
		winCells: [],
	});
	const lastMove = useRef({
		player: null,
		cellID: null,
	});

	const updateCell = (cellID) => {
		if (
			board[cellID] === CELL_STATE.EMPTY &&
			game.status === GAME_RESULT.CONTINUE
		) {
			lastMove.current.player = turn;
			lastMove.current.cellID = cellID;
			setBoard((prevBoard) => {
				const newBoard = [...prevBoard];
				newBoard[cellID] = turn;
				return newBoard;
			});
		}
	};

	const restart = () => {
		lastMove.current.player = null;
		lastMove.current.cellID = null;
		setBoard(BOARD_STATE.EMPTY);
		setTurn(TURN_STATE.X);
		setGame((prevGame) => {
			return {
				...prevGame,
				status: GAME_RESULT.CONTINUE,
				winCells: [],
			};
		});
	};

	// Manage turn
	useEffect(() => {
		if (board !== BOARD_STATE.EMPTY) {
			const { gameResult, winCells } = checkGameResult({
				board,
				player: lastMove.current.player,
				cellID: lastMove.current.cellID,
			});

			setGame((prevGame) => {
				return {
					...prevGame,
					status: gameResult,
					winner:
						gameResult === GAME_RESULT.WIN
							? lastMove.current.player
							: null,
					winCells: gameResult === GAME_RESULT.WIN ? winCells : [],
				};
			});

			if (gameResult === GAME_RESULT.CONTINUE) {
				// Pass turn to the next player
				setTurn((prevTurn) => {
					return prevTurn === TURN_STATE.X
						? TURN_STATE.O
						: TURN_STATE.X;
				});
			}
		}
	}, [board]);

	return { board, turn, game, updateCell, restart };
}
