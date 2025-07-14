import "../styles/RestartButton.css";

export default function RestartButton(props) {
	return (
		<button className="restart-button" onClick={props.restart}>
			{props.isGameOver ? "PLAY AGAIN" : "RESTART"}
		</button>
	);
}
