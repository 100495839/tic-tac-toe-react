import Board from "./Board";
import RestartButton from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";
import { useGame } from "../hooks/useGame";
import { GAME_RESULT } from "../constants/constants";
import ResultMessage from "./ResultMessage";

export default function Main() {
	const { board, turn, status, winner, winCells, updateCell, restart } =
		useGame();

	return (
		<main className="main">
			{status === GAME_RESULT.CONTINUE ? (
				<Turn turn={turn} />
			) : (
				<ResultMessage status={status} winner={winner} />
			)}
			<Board board={board} updateCell={updateCell} winCells={winCells} />
			<RestartButton
				restart={restart}
				isGameOver={status !== GAME_RESULT.CONTINUE}
			/>
		</main>
	);
}
