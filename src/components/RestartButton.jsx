import "../styles/RestartButton.css";

export default function RestartButton(props) {
	return (
		<button className="restart-button" onClick={props.restart}>
			RESTART
		</button>
	);
}
