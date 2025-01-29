import { Square } from "./Square";

export type Color = "white" | "black";
type FigureType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

export abstract class Figure {
	private _square: Square;
	private _color: Color;
	private _type: FigureType;

	constructor(square: Square, color: Color, type: FigureType) {
		this._square = square;
		this._color = color;
		this._type = type;
	}

	abstract move(square: Square): void;
	abstract getAvailableMoves(): Square[] | undefined;

	get color() {
		return this._color;
	}

	get square(): Square {
		return this._square;
	}

	protected set square(square: Square) {
		this._square = square;
	}
	
	public getCurrentStatus(): string {
		return `${this.square.toString()} - ${this._color} ${this._type}`;
	}
}
