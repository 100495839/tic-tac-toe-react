import { useReducer } from "react";
import {
	CELL_STATE,
	TURN_STATE,
	WINNER_STATE,
	BOARD_STATE,
	GAME_RESULT,
	ACTION_TYPES,
} from "../constants/constants";
import { checkGameResult } from "../logic/logic";

const reducer = (state, action) => {
	if (
		action.type === ACTION_TYPES.MOVE &&
		state.board[action.cellID] === CELL_STATE.EMPTY &&
		state.status === GAME_RESULT.CONTINUE
	) {
		// board
		const newBoard = [...state.board];
		newBoard[action.cellID] = state.turn;

		// status, winner, winCells
		const { gameResult: newStatus, winCells } = checkGameResult({
			board: newBoard,
			player: state.turn,
			cellID: action.cellID,
		});
		const newWinner =
			newStatus === GAME_RESULT.WIN ? state.turn : WINNER_STATE.NO_ONE;
		const newWinCells = newStatus === GAME_RESULT.WIN ? winCells : [];

		// turn
		let newTurn;
		if (newStatus === GAME_RESULT.CONTINUE) {
			newTurn = state.turn === TURN_STATE.X ? TURN_STATE.O : TURN_STATE.X;
		} else {
			newTurn = TURN_STATE.GAME_FINISHED;
		}

		return {
			board: newBoard,
			turn: newTurn,
			status: newStatus,
			winner: newWinner,
			winCells: newWinCells,
		};
	} else if (action.type === ACTION_TYPES.RESTART) {
		return {
			board: BOARD_STATE.EMPTY,
			turn: TURN_STATE.X,
			status: GAME_RESULT.CONTINUE,
			winner: WINNER_STATE.NO_ONE,
			winCells: [],
		};
	}

	return state;
};

export function useGame() {
	const [state, dispatch] = useReducer(reducer, {
		board: BOARD_STATE.EMPTY,
		turn: TURN_STATE.X,
		status: GAME_RESULT.CONTINUE,
		winner: WINNER_STATE.NO_ONE,
		winCells: [],
	});

	const updateCell = (cellID) => {
		dispatch({ type: ACTION_TYPES.MOVE, cellID });
	};
	const restart = () => {
		dispatch({ type: ACTION_TYPES.RESTART });
	};

	return {
		...state,
		updateCell,
		restart,
	};
}
