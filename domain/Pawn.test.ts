import { Pawn } from "./Pawn";
import { Square } from "./Square";

describe("Pawn", () => {
	it("should allow moving a white pawn from A2 to A3", () => {
		const pawn = new Pawn(new Square("A", 2), "white");

		pawn.move(new Square("A", 3));

		expect(pawn.square).toEqual(new Square("A", 3));
	});

	it("should allow moving a black pawn from A7 to A6", () => {
		const pawn = new Pawn(new Square("A", 7), "black");

		pawn.move(new Square("A", 6));

		expect(pawn.square).toEqual(new Square("A", 6));
	});
});
