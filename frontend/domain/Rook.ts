import { Color, Figure } from "./Figure";
import { Game } from "./Game";
import { Square } from "./Square";

export class Rook extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "rook");
	}

	move(square: Square, game: Game): void {
		throw new Error("Method not implemented.");
	}

	getAvailableMoves(game: Game): Square[] | undefined {
		const availableMoves: Square[] = [];
		let iteratingRightHorizontalSquare: Square | undefined = this.square.copySquareRight();
		let iteratingLeftHorizontalSquare: Square | undefined = this.square.copySquareLeft();
		let iteratingUpVerticalSquare: Square | undefined = this.square.copySquareAbove();
		let iteratingDownVerticalSquare: Square | undefined = this.square.copySquareBelow();

		while (
			iteratingRightHorizontalSquare !== undefined &&
			this.isSquareEmpty(iteratingRightHorizontalSquare, game)
		) {
			availableMoves.push(iteratingRightHorizontalSquare);
			iteratingRightHorizontalSquare = iteratingRightHorizontalSquare.copySquareRight();
		}
		if (
			iteratingRightHorizontalSquare !== undefined &&
			game.getFigureBySquareAndColor(iteratingRightHorizontalSquare, this.getOponentColor()) !==
				undefined
		) {
			availableMoves.push(iteratingRightHorizontalSquare);
		}

		while (
			iteratingLeftHorizontalSquare !== undefined &&
			this.isSquareEmpty(iteratingLeftHorizontalSquare, game)
		) {
			availableMoves.push(iteratingLeftHorizontalSquare);
			iteratingLeftHorizontalSquare = iteratingLeftHorizontalSquare.copySquareLeft();
		}
		if (
			iteratingLeftHorizontalSquare !== undefined &&
			game.getFigureBySquareAndColor(iteratingLeftHorizontalSquare, this.getOponentColor()) !==
				undefined
		) {
			availableMoves.push(iteratingLeftHorizontalSquare);
		}

		while (
			iteratingUpVerticalSquare !== undefined &&
			this.isSquareEmpty(iteratingUpVerticalSquare, game)
		) {
			availableMoves.push(iteratingUpVerticalSquare);
			iteratingUpVerticalSquare = iteratingUpVerticalSquare.copySquareAbove();
		}
		if (
			iteratingUpVerticalSquare !== undefined &&
			game.getFigureBySquareAndColor(iteratingUpVerticalSquare, this.getOponentColor()) !==
				undefined
		) {
			availableMoves.push(iteratingUpVerticalSquare);
		}

		while (
			iteratingDownVerticalSquare !== undefined &&
			this.isSquareEmpty(iteratingDownVerticalSquare, game)
		) {
			availableMoves.push(iteratingDownVerticalSquare);
			iteratingDownVerticalSquare = iteratingDownVerticalSquare.copySquareBelow();
		}
		if (
			iteratingDownVerticalSquare !== undefined &&
			game.getFigureBySquareAndColor(iteratingDownVerticalSquare, this.getOponentColor()) !==
				undefined
		) {
			availableMoves.push(iteratingDownVerticalSquare);
		}

		return availableMoves;
	}

	private isSquareEmpty = (square: Square | undefined, game: Game): boolean => {
		if (square === undefined) {
			return false;
		}
		return game.getFigurebySquare(square) === undefined;
	};
}
