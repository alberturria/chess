import "./Chessboard.css";
import WhitePawn from "./assets/figures/white/pawn.svg";
import BlackPawn from "./assets/figures/black/pawn.svg";
import WhiteRook from "./assets/figures/white/rook.svg";
import BlackRook from "./assets/figures/black/rook.svg";
import WhiteKnight from "./assets/figures/white/knight.svg";
import BlackKnight from "./assets/figures/black/knight.svg";
import WhiteBishop from "./assets/figures/white/bishop.svg";
import BlackBishop from "./assets/figures/black/bishop.svg";
import WhiteQueen from "./assets/figures/white/queen.svg";
import BlackQueen from "./assets/figures/black/queen.svg";
import WhiteKing from "./assets/figures/white/king.svg";
import BlackKing from "./assets/figures/black/king.svg";

import { Figure } from "../domain/Figure";
import { Game } from "../domain/Game";
import { Square } from "../domain/Square";

type Props = {
	col: string;
	row: string;
	isDark: boolean;
	figure: Figure | undefined;
	game: Game;
	isPossibleToMove: boolean;
	onMoveSelected: (tiles: Square[]) => void;
};

export default function Tile({
	col,
	row,
	isDark,
	isPossibleToMove,
	figure,
	game,
	onMoveSelected,
}: Props) {
	const svg = getSVG(figure);

	const handleClick = (game: Game, figure: Figure | undefined): Square[] | undefined => {
		if (figure) {
			const availableMoves = figure.getAvailableMoves(game);
			onMoveSelected(availableMoves ?? []);
		}
		return [];
	};
	let className;
	if (isPossibleToMove) {
		className = "square possible-move opacity";
	} else {
		className = isDark ? "square dark" : "square light";
	}

	return (
		<div key={`${col}${row}`} className={className} onClick={() => handleClick(game, figure)}>
			{figure ? <div className={`figure ${figure.color} ${figure.type}`}></div> : null}

			{svg ? <img src={svg}></img> : null}
		</div>
	);
}

const getSVG = (figure: Figure | undefined) => {
	if (!figure) {
		return null;
	}
	switch (figure.type) {
		case "pawn":
			return figure.color === "white" ? WhitePawn : BlackPawn;
		case "rook":
			return figure.color === "white" ? WhiteRook : BlackRook;
		case "knight":
			return figure.color === "white" ? WhiteKnight : BlackKnight;
		case "bishop":
			return figure.color === "white" ? WhiteBishop : BlackBishop;
		case "queen":
			return figure.color === "white" ? WhiteQueen : BlackQueen;
		case "king":
			return figure.color === "white" ? WhiteKing : BlackKing;
	}
};
