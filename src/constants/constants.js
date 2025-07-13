export const CELL_STATE = {
	X: "X",
	O: "O",
	EMPTY: null,
};

export const TURN_STATE = {
	X: "X",
	O: "O",
};

export const BOARD_STATE = {
	EMPTY: Array(9).fill(CELL_STATE.EMPTY),
	WIN_X_NOT_FULL: ["X", "O", "O", null, "X", null, null, null, "X"],
	WIN_X_FULL: ["X", "O", "O", "X", "X", "O", "O", "X", "X"],
	TIE: ["X", "O", "O", "O", "X", "X", "X", "X", "O"],
};
