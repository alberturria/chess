import { Bishop } from "../domain/Bishop";
import { Color, Figure } from "../domain/Figure";
import { Game } from "../domain/Game";
import { King } from "../domain/King";
import { Knight } from "../domain/Knight";
import { Pawn } from "../domain/Pawn";
import { Queen } from "../domain/Queen";
import { Rook } from "../domain/Rook";
import { Square } from "../domain/Square";

const main = () => {
	console.log("Creating a new Chess Game");

	const whiteFigures = createFigures("white");
	const blackFigures = createFigures("black");
	const game = new Game([...whiteFigures, ...blackFigures]);

	console.log("GAME CREATED");
	const currentBoardStatus = game.getGameStatus();
	console.log(currentBoardStatus);

	const firstWhitePawn = game.getFigurebySquare(new Square("A", 2));
	console.log(firstWhitePawn.getCurrentStatus());
	console.log("Available moves for the first white pawn:" + firstWhitePawn.getAvailableMoves());
};

// TODO: Check where the initialization of the game should be palced.
function createFigures(color: Color): Figure[] {
	const pawns = createPawns(color);
	const rooks = createRooks(color);
	const knights = createKnights(color);
	const bishops = createBishops(color);
	const queen = createQueen(color);
	const king = createKing(color);
	return [...pawns, ...rooks, ...knights, ...bishops, queen, king];
}

function createPawns(color: Color): Pawn[] {
	let row: 2 | 7;
	if (color === "white") {
		row = 2;
	} else {
		row = 7;
	}
	const pawns: Pawn[] = [
		new Pawn(new Square("A", row), color),
		new Pawn(new Square("B", row), color),
		new Pawn(new Square("C", row), color),
		new Pawn(new Square("D", row), color),
		new Pawn(new Square("E", row), color),
		new Pawn(new Square("F", row), color),
		new Pawn(new Square("G", row), color),
		new Pawn(new Square("H", row), color),
	];
	return pawns;
}

function createRooks(color: Color): Rook[] {
	let row: 1 | 8;
	if (color === "white") {
		row = 1;
	} else {
		row = 8;
	}
	const rooks: Rook[] = [
		new Rook(new Square("A", row), color),
		new Rook(new Square("H", row), color),
	];
	return rooks;
}

function createKnights(color: Color): Knight[] {
	let row: 1 | 8;
	if (color === "white") {
		row = 1;
	} else {
		row = 8;
	}
	const knights: Knight[] = [
		new Knight(new Square("B", row), color),
		new Knight(new Square("G", row), color),
	];
	return knights;
}

function createBishops(color: Color): Bishop[] {
	let row: 1 | 8;
	if (color === "white") {
		row = 1;
	} else {
		row = 8;
	}
	const bishops: Bishop[] = [
		new Bishop(new Square("C", row), color),
		new Bishop(new Square("F", row), color),
	];
	return bishops;
}

function createQueen(color: Color): Queen {
	let row: 1 | 8;
	if (color === "white") {
		row = 1;
	} else {
		row = 8;
	}
	return new Queen(new Square("D", row), color);
}

function createKing(color: Color): King {
	let row: 1 | 8;
	if (color === "white") {
		row = 1;
	} else {
		row = 8;
	}
	return new King(new Square("E", row), color);
}

main();
