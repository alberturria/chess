import { Color, Figure } from "./Figure";
import { Square } from "./Square";

export class Bishop extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "bishop");
	}

	move(square: Square): void {
		throw new Error("Method not implemented.");
	}
}
