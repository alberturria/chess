import { useState } from "react";
import { Square } from "../domain/Square";
import "./Chessboard.css";
import { useChess } from "./hooks/use-chess";
import Tile from "./Tile";

export default function Chessboard() {
	const [possibleMoves, setPossibleMoves] = useState<Square[]>([]);
	const rows = "87654321".split("");
	const cols = "ABCDEFGH".split("");

	const game = useChess();
	const onMoveSelected = (squares: Square[]) => {
		setPossibleMoves(squares);
	};

	return (
		<div className="chessboard">
			{rows.flatMap((row, rowIndex) =>
				cols.map((col, colIndex) => {
					const isDark = (rowIndex + colIndex) % 2 === 1;
					const figure = game.getFigurebySquare(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						new Square(col.toUpperCase() as any, parseInt(row) as any)
					);
					return (
						<Tile
							key={`${col}${row}`}
							col={col}
							row={row}
							isDark={isDark}
							figure={figure}
							game={game}
							isPossibleToMove={possibleMoves.some(
								(square) => square.column === col && square.row === parseInt(row)
							)}
							onMoveSelected={onMoveSelected}
						/>
					);
				})
			)}
		</div>
	);
}
