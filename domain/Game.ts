import { Figure } from "./Figure";

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
}
