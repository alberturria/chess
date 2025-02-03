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

	it('should allow moving a black pawn on "backward diagonal" when there is an oponent piece there', () => {
		const pawn = new Pawn(new Square("B", 7), "black");
		const oponentPawn = new Pawn(new Square("A", 6), "white");
		const game = new Game([pawn, oponentPawn]);

		pawn.move(new Square("A", 6), game);

		expect(pawn.square).toEqual(new Square("A", 6));
	});

	it('should throw an error when trying to move a white pawn on "backward diagonal"', () => {
		const pawn = new Pawn(new Square("A", 3), "white");
		const oponentPawn = new Pawn(new Square("B", 2), "black");
		const game = new Game([pawn, oponentPawn]);

		const action = () => pawn.move(new Square("A", 3), game);

		expect(action).toThrow(new Error("Invalid move"));
	});

	it("should not allow moving a white pawn from A3 to A4 if there is a piece on A4", () => {
		const pawn = new Pawn(new Square("A", 3), "white");
		const allyPawn = new Pawn(new Square("A", 4), "white");
		const game = new Game([pawn, allyPawn]);

		const action = () => pawn.move(new Square("A", 4), game);

		expect(action).toThrow(new Error("Invalid move"));
	});

	it("should not allow moving a black pawn from B6 to B5 if there is a piece on B5", () => {
		const pawn = new Pawn(new Square("B", 6), "black");
		const allyPawn = new Pawn(new Square("B", 5), "black");
		const game = new Game([pawn, allyPawn]);

		const action = () => pawn.move(new Square("B", 5), game);

		expect(action).toThrow(new Error("Invalid move"));
	});
});
