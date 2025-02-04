import { isDefined } from "../ts-utils";
import { Color, Figure } from "./Figure";
import { Game } from "./Game";
import { Square } from "./Square";

export class King extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "king");
	}

	move(newSquare: Square, game: Game): void {
		const availableMoves = this.getAvailableMoves(game);
		const isMoveValid = !!availableMoves?.find((square) => newSquare.equals(square));

		if (!isMoveValid) {
			throw new Error("Invalid move");
		}
		super.square = newSquare;
	}
	getAvailableMoves(game: Game): Square[] | undefined {
		const squaresAround = [
			this.square.copySquareAbove(),
			this.square.copySquareBelow(),
			this.square.copySquareLeft(),
			this.square.copySquareRight(),
			this.square.copySquareAbove()?.copySquareLeft(),
			this.square.copySquareAbove()?.copySquareRight(),
			this.square.copySquareBelow()?.copySquareLeft(),
			this.square.copySquareBelow()?.copySquareRight(),
		].filter(isDefined);
		const squaresAroundWithoutAllyFigure = squaresAround.filter(
			(square) => game.getFigureBySquareAndColor(square, this.color) === undefined
		);

		return squaresAroundWithoutAllyFigure;
	}
}
