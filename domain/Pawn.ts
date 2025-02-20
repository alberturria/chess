import { isDefined } from "../ts-utils";
import { Color, Figure } from "./Figure";
import { Game } from "./Game";
import { Square } from "./Square";

export class Pawn extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "pawn");
	}

	move(newSquare: Square, game: Game): void {
		const availableMoves = this.getAvailableMoves(game);
		const isMoveValid = !!availableMoves?.find((square) => newSquare.equals(square));

		if (!isMoveValid) {
			throw new Error("Invalid move");
		}
		super.square = newSquare;
	}

	public getAvailableMoves(game: Game): Square[] | undefined {
		if (this.color === "white") {
			if (this.square.row === 8) {
				return [];
			}

			const diagonalAvailableSquares = [
				this.square.copySquareAbove()?.copySquareLeft(),
				this.square.copySquareAbove()?.copySquareRight(),
			]
				.filter(isDefined)
				.filter((square) => game.getFigureBySquareAndColor(square, "black") !== undefined);
			if (this.square.row === 2) {
				return [
					this.square.copySquareAbove(),
					this.square.copySquareAbove()?.copySquareAbove(),
					...diagonalAvailableSquares,
				].filter(isDefined);
			}

			return [this.square.copySquareAbove(), ...diagonalAvailableSquares]
				.filter(
					(square) =>
						isDefined(square) && game.getFigureBySquareAndColor(square, this.color) === undefined
				)
				.filter(isDefined);
		}

		if (this.color === "black") {
			if (this.square.row === 1) {
				return [];
			}
			const diagonalAvailableSquares = [
				this.square.copySquareBelow()?.copySquareLeft(),
				this.square.copySquareBelow()?.copySquareRight(),
			]
				.filter(isDefined)
				.filter((square) => game.getFigureBySquareAndColor(square, "white") !== undefined);
			if (this.square.row === 7) {
				return [
					this.square.copySquareBelow(),
					this.square.copySquareBelow()?.copySquareBelow(),
					...diagonalAvailableSquares,
				]
					.filter(isDefined)
					.filter((square) => game.getFigureBySquareAndColor(square, this.color) === undefined)
					.filter(isDefined);
			}
			return [this.square.copySquareBelow(), ...diagonalAvailableSquares]
				.filter(isDefined)
				.filter((square) => game.getFigureBySquareAndColor(square, this.color) === undefined)
				.filter(isDefined);
		}
	}
}
