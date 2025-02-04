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
		let iteratingRightHorizontalSquare: Square | undefined = this.square;
		let iteratingLeftHorizontalSquare: Square | undefined = this.square;
		let iteratingUpVerticalSquare: Square | undefined = this.square;
		let iteratingDownVerticalSquare: Square | undefined = this.square;

		while (iteratingRightHorizontalSquare !== undefined) {
			availableMoves.push(iteratingRightHorizontalSquare);
			iteratingRightHorizontalSquare = iteratingRightHorizontalSquare.copySquareRight();
		}

		while (iteratingLeftHorizontalSquare !== undefined) {
			availableMoves.push(iteratingLeftHorizontalSquare);
			iteratingLeftHorizontalSquare = iteratingLeftHorizontalSquare.copySquareLeft();
		}

		while (iteratingUpVerticalSquare !== undefined) {
			availableMoves.push(iteratingUpVerticalSquare);
			iteratingUpVerticalSquare = iteratingUpVerticalSquare.copySquareAbove();
		}

		while (iteratingDownVerticalSquare !== undefined) {
			availableMoves.push(iteratingDownVerticalSquare);
			iteratingDownVerticalSquare = iteratingDownVerticalSquare.copySquareBelow();
		}

		return availableMoves;
	}
}
