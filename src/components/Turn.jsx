import { TURN_STATE } from "../constants/constants";
import "../styles/Turn.css";

export default function Turn(props) {
	const MY_TURN_CLASS = "turn--my-turn";
	const classNameX = `turn__X ${
		props.turn === TURN_STATE.X ? MY_TURN_CLASS : ""
	}`;
	const classNameO = `turn__O ${
		props.turn === TURN_STATE.O ? MY_TURN_CLASS : ""
	}`;

	return (
		<div className="turn">
			<span className={classNameX}>X</span>
			<span className={classNameO}>O</span>
		</div>
	);
}
