import { Figure } from "./Figure";
import { Square } from "./Square";

export class Game {
	private figures: Figure[];

	constructor(figures: Figure[]) {
		this.figures = figures;
	}

	public getGameStatus(): string {
		const figureStatus = this.figures.map((figure) => figure.getCurrentStatus());

		return figureStatus.join("\n");
	}

	public isGameOver(): boolean {
		throw new Error("Not implemented!");
	}

	public getFigurebySquare(square: Square): Figure {
		const figure = this.figures.find((figure) => figure.square.equals(square));
		if (!figure) {
			throw new Error("No figure found on the provided square");
		}
		return figure;
	}
}
