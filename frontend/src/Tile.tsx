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

type Props = {
	col: string;
	row: string;
	isDark: boolean;
	figure: Figure | undefined;
};

export default function Tile({ col, row, isDark, figure }: Props) {
	const svg = getSVG(figure);
	return (
		<div key={`${col}${row}`} className={`square ${isDark ? "dark" : "light"}`}>
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
