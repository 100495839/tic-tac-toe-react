import "../styles/Cell.css";

export default function Cell(props) {
	return (
		<div className="cell" onClick={() => props.updateCell(props.id)}>
			{props.content}
		</div>
	);
}
