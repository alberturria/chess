import { Color, Figure } from "./Figure";
import { Game } from "./Game";
import { Square } from "./Square";

export class Queen extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "queen");
	}

	move(square: Square, game: Game): void {
		throw new Error("Method not implemented.");
	}

	getAvailableMoves(): Square[] | undefined {
		throw new Error("Method not implemented.");
	}
}
