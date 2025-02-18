import { Game } from "./Game";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Square } from "./Square";

describe("Knight", () => {
	it("should get all the possible initial white moves", () => {
		const knight = new Knight(new Square("B", 1), "white");
		const game = new Game([knight]);

		const moves = knight.getAvailableMoves(game);

		expect(moves).toEqual(expect.arrayContaining([new Square("A", 3), new Square("C", 3)]));
	});

	it("should get all the possible initial black moves", () => {
		const knight = new Knight(new Square("B", 8), "black");
		const game = new Game([knight]);

		const moves = knight.getAvailableMoves(game);

		expect(moves).toEqual(expect.arrayContaining([new Square("A", 6), new Square("C", 6)]));
	});

	it("should not get any move when there are pieces from the same side on the expected possible squares", () => {
		const knight = new Knight(new Square("B", 1), "white");
		const firstAllyPawn = new Pawn(new Square("A", 3), "white");
		const secondAllyPawn = new Pawn(new Square("C", 3), "white");
		const thirdAllyPawn = new Pawn(new Square("D", 2), "white");

		const game = new Game([knight, firstAllyPawn, secondAllyPawn, thirdAllyPawn]);

		const moves = knight.getAvailableMoves(game);

		expect(moves).toEqual([]);
	});
});
