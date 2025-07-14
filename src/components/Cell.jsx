import "../styles/Cell.css";

export default function Cell(props) {
	const cellClassName = `cell ${props.isWinner ? "cell--winner" : ""}`;
	return (
		<div
			className={cellClassName}
			onClick={() => props.updateCell(props.id)}
		>
			{props.content}
		</div>
	);
}
