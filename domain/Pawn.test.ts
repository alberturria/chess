import { Game } from "./Game";
import { Pawn } from "./Pawn";
import { Square } from "./Square";

describe("Pawn", () => {
	const game = new Game([]);
	it("should allow moving a white pawn from A2 to A3", () => {
		const pawn = new Pawn(new Square("A", 2), "white");

		pawn.move(new Square("A", 3), game);

		expect(pawn.square).toEqual(new Square("A", 3));
	});

	it("should allow moving a black pawn from A7 to A6", () => {
		const pawn = new Pawn(new Square("A", 7), "black");

		pawn.move(new Square("A", 6), game);

		expect(pawn.square).toEqual(new Square("A", 6));
	});

	it('should allow moving a white pawn on "forward diagonal" when there is an oponent piece there', () => {
		const pawn = new Pawn(new Square("A", 2), "white");
		const oponentPawn = new Pawn(new Square("B", 3), "black");
		const game = new Game([pawn, oponentPawn]);

		pawn.move(new Square("B", 3), game);

		expect(pawn.square).toEqual(new Square("B", 3));
	});
});
