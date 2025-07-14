import Board from "./Board";
import RestartButton from "./RestartButton";
import Turn from "./Turn";
import "../styles/Main.css";
import { useGame } from "../hooks/useGame";
import { GAME_RESULT } from "../constants/constants";
import ResultMessage from "./ResultMessage";

export default function Main() {
	const { board, turn, game, updateCell, restart } = useGame();

	return (
		<main className="main">
			{game.status === GAME_RESULT.CONTINUE ? (
				<Turn turn={turn} />
			) : (
				<ResultMessage status={game.status} winner={game.winner} />
			)}
			<Board
				board={board}
				updateCell={updateCell}
				winCells={game.winCells}
			/>
			<RestartButton
				restart={restart}
				isGameOver={game.status !== GAME_RESULT.CONTINUE}
			/>
		</main>
	);
}
