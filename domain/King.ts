import { Color, Figure } from "./Figure";
import { Square } from "./Square";

export class King extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "king");
	}

	move(square: Square): void {
		throw new Error("Method not implemented.");
	}
}
