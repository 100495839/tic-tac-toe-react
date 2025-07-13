import {
	BOARD_DIMENSION,
	DIAGONALS,
	GAME_RESULT,
} from "../constants/constants";

const checkColumnWin = ({ board, player, cellID }) => {
	const cellColumn = cellID % BOARD_DIMENSION;
	// Check if all cells of that column have "player"
	let winCells = [];

	const isColumnWin = board.every((cell, index) => {
		if (index % BOARD_DIMENSION === cellColumn) {
			winCells.push(index);
			return cell === player;
		}
		return true;
	});

	return { isColumnWin, winCells };
};

const checkRowWin = ({ board, player, cellID }) => {
	const cellRow = Math.floor(cellID / BOARD_DIMENSION);
	// Check if all cells of that row have "player"
	let winCells = [];

	const isRowWin = board.every((cell, index) => {
		if (Math.floor(index / BOARD_DIMENSION) === cellRow) {
			winCells.push(index);
			return cell === player;
		}
		return true;
	});

	return { isRowWin, winCells };
};

const checkDiagonalWin = ({ board, player, cellID }) => {
	let winCells = [];
	let isDiagonalWin = false;

	DIAGONALS.forEach((diagonal) => {
		if (!isDiagonalWin) {
			winCells = [];
			isDiagonalWin = diagonal.every((cellID) => {
				winCells.push(cellID);
				return board[cellID] === player;
			});
		}
	});

	return { isDiagonalWin, winCells };
};

const checkWin = ({ board, player, cellID }) => {
	const numMoves = board.filter((cell) => cell === player).length;
	if (numMoves < 3) {
		return { isWin: false };
	}

	const { isColumnWin, winCells: winCellsColumn } = checkColumnWin({
		board,
		player,
		cellID,
	});
	if (isColumnWin) {
		return { isWin: true, winCells: winCellsColumn };
	}

	const { isRowWin, winCells: winCellsRow } = checkRowWin({
		board,
		player,
		cellID,
	});
	if (isRowWin) {
		return { isWin: true, winCells: winCellsRow };
	}

	const { isDiagonalWin, winCells: winCellsDiagonal } = checkDiagonalWin({
		board,
		player,
		cellID,
	});
	if (isDiagonalWin) {
		return { isWin: true, winCells: winCellsDiagonal };
	}

	return { isWin: false };
};

export const checkGameResult = ({ board, player, cellID }) => {
	const { isWin, winCells } = checkWin({ board, player, cellID });
	if (isWin) {
		return { gameResult: GAME_RESULT.WIN, winCells };
	}

	const isBoardFull = !board.includes(null);
	if (isBoardFull) {
		return { gameResult: GAME_RESULT.TIE };
	}

	return { gameResult: GAME_RESULT.CONTINUE };
};
