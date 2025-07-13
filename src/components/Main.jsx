import Board from "./Board";
import RestartButton from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";
import { useGame } from "../hooks/useGame";

export default function Main() {
	const { board, turn, updateCell, restart } = useGame();

	return (
		<main className="main">
			<Turn turn={turn} />
			<Board board={board} updateCell={updateCell} />
			<RestartButton restart={restart} />
		</main>
	);
}
