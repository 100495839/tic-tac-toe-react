import { GAME_RESULT } from "../constants/constants";
import "../styles/ResultMessage.css";

export default function ResultMessage(props) {
	let message;

	if (props.status === GAME_RESULT.WIN) {
		message = (
			<h2 className="result-message__title">
				WINNER - <strong>{props.winner}</strong>
			</h2>
		);
	} else if (props.status === GAME_RESULT.TIE) {
		message = <h2 className="result-message__title">TIE</h2>;
	}

	return <div className="result-message">{message}</div>;
}
