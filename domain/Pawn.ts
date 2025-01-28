import { Color, Figure } from "./Figure";
import { Square } from "./Square";

export class Pawn extends Figure {
	constructor(square: Square, color: Color) {
		super(square, color, "pawn");
	}

	move(square: Square): void {
		throw new Error("Method not implemented.");
	}

	public getAvailableMoves(): Square[] | undefined {
		if (this.color === "white") {
			if (this.square.row === 2) {
				return [new Square(this.square.column, 3), new Square(this.square.column, 4)];
			}
			if (this.square.row === 8) {
				return [];
			}
			return [new Square(this.square.column, (this.square.row + 1) as Square["row"])]; // TODO: Avoid casting these Rows
		}

		if (this.color === "black") {
			if (this.square.row === 7) {
				return [new Square(this.square.column, 6), new Square(this.square.column, 5)];
			}
			if (this.square.row === 1) {
				return [];
			}
			return [new Square(this.square.column, (this.square.row - 1) as Square["row"])];
		}
	}
}
