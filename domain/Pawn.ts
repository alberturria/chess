import { Color, Figure } from "./Figure";
import { Square } from "./Square";

export class Pawn extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "pawn");
	}

	move(square: Square): void {
		throw new Error("Method not implemented.");
	}
}
