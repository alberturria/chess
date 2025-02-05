import { Game } from "./Game";
import { Rook } from "./Rook";
import { Square } from "./Square";

describe("Rook", () => {
	it("should get as available moves all the squares in the same row and column when there is no other piece", () => {
		const rook = new Rook(new Square("D", 4), "white");
		const game = new Game([rook]);

		const availableMoves = rook.getAvailableMoves(game);

		expect(availableMoves).toEqual(
			expect.arrayContaining([
				new Square("A", 4),
				new Square("B", 4),
				new Square("C", 4),
				new Square("E", 4),
				new Square("F", 4),
				new Square("G", 4),
				new Square("H", 4),
				new Square("D", 1),
				new Square("D", 2),
				new Square("D", 3),
				new Square("D", 5),
				new Square("D", 6),
				new Square("D", 7),
				new Square("D", 8),
			])
		);
	});

	it.only("should get as available moves all the squares in the same row and column until the first piece when there is an oponent piece blocking the way", () => {
		const rook = new Rook(new Square("D", 4), "white");
		const oponentPawn = new Rook(new Square("E", 4), "black");
		const game = new Game([rook, oponentPawn]);

		const availableMoves = rook.getAvailableMoves(game);

		expect(availableMoves).toEqual(
			expect.arrayContaining([
				new Square("A", 4),
				new Square("B", 4),
				new Square("C", 4),
				new Square("E", 4),
				new Square("D", 1),
				new Square("D", 2),
				new Square("D", 3),
				new Square("D", 5),
				new Square("D", 6),
				new Square("D", 7),
				new Square("D", 8),
			])
		);
		expect(availableMoves).not.toEqual(
			expect.arrayContaining([new Square("F", 4), new Square("G", 4), new Square("H", 4)])
		);
	});
});
