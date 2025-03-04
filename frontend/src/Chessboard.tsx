import { Square } from "../domain/Square";
import "./Chessboard.css";
import { useChess } from "./hooks/use-chess";
import Tile from "./Tile";

export default function Chessboard() {
	const rows = "87654321".split("");
	const cols = "abcdefgh".split("");

	const game = useChess();

	return (
		<div className="chessboard">
			{rows.flatMap((row, rowIndex) =>
				cols.map((col, colIndex) => {
					const isDark = (rowIndex + colIndex) % 2 === 1;
					const figure = game.getFigurebySquare(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						new Square(col.toUpperCase() as any, parseInt(row) as any)
					);
					return <Tile key={`${col}${row}`} col={col} row={row} isDark={isDark} figure={figure} />;
				})
			)}
		</div>
	);
}
