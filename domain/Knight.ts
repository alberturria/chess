import { isDefined } from "../ts-utils";
import { Color, Figure } from "./Figure";
import { Game } from "./Game";
import { Square } from "./Square";

export class Knight extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "knight");
	}

	move(square: Square, game: Game): void {
		throw new Error("Method not implemented.");
	}

	getAvailableMoves(game: Game): Square[] | undefined {
		const availableMoves = [
			this.square.copySquareAbove()?.copySquareLeft()?.copySquareLeft(),
			this.square.copySquareAbove()?.copySquareRight()?.copySquareRight(),
			this.square.copySquareRight()?.copySquareAbove()?.copySquareAbove(),
			this.square.copySquareRight()?.copySquareBelow()?.copySquareBelow(),
			this.square.copySquareBelow()?.copySquareRight()?.copySquareRight(),
			this.square.copySquareBelow()?.copySquareLeft()?.copySquareLeft(),
			this.square.copySquareLeft()?.copySquareBelow()?.copySquareBelow(),
			this.square.copySquareLeft()?.copySquareAbove()?.copySquareAbove(),
		]
			.filter(isDefined)
			.filter((square) => game.getFigureBySquareAndColor(square, this.color) === undefined);

		return availableMoves.filter(isDefined);
	}
}
