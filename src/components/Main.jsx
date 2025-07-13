import Board from "./Board";
import Buttons from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";

export default function Main() {
	return (
		<main className="main">
			<Turn />
			<Board />
			<Buttons />
		</main>
	);
}
