import "../styles/Board.css";
import Cell from "./Cell";

export default function Board(props) {
	const cellsMap = () => {
		return props.board.map((cell, index) => {
			return (
				<Cell
					key={index}
					id={index}
					content={cell}
					updateCell={props.updateCell}
					isWinner={props.winCells.includes(index)}
				/>
			);
		});
	};

	return <div className="board">{cellsMap()}</div>;
}
