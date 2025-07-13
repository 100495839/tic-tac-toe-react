import "../styles/Board.css";
import Cell from "./Cell";

export default function Board() {
	return (
		<div className="board">
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
		</div>
	);
}
