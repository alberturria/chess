import { Game } from "./Game";
import { Knight } from "./Knight";
import { Square } from "./Square";

describe("Knight", () => {
	it("should get all the possible initial white moves", () => {
		const knight = new Knight(new Square("B", 1), "white");
		const game = new Game([knight]);

		const moves = knight.getAvailableMoves(game);

		expect(moves).toEqual(expect.arrayContaining([new Square("A", 3), new Square("C", 3)]));
	});
	

});
