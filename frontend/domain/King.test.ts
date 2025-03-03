import { Game } from "./Game";
import { King } from "./King";
import { Square } from "./Square";

describe("King", () => {
	it("should allow moving the king forward when there is no ally figure in that square", () => {
		const game = new Game([]);
		const king = new King(new Square("E", 1), "white");

		king.move(new Square("E", 2), game);

		expect(king.square).toEqual(new Square("E", 2));
	});

	it("should not allow moving the king forward when there is an ally figure in that square", () => {
		const king = new King(new Square("E", 1), "white");
		const allyPawn = new King(new Square("E", 2), "white");
		const game = new Game([king, allyPawn]);

		const action = () => king.move(new Square("E", 2), game);

		expect(action).toThrow(new Error("Invalid move"));
	});

	it('should allow moving the king "forward diagonal" when there is an oponent piece there', () => {
		const king = new King(new Square("E", 1), "white");
		const oponentKing = new King(new Square("F", 2), "black");
		const game = new Game([king, oponentKing]);

		king.move(new Square("F", 2), game);

		expect(king.square).toEqual(new Square("F", 2));
	});

	it('should not allow moving the king "forward diagonal" when there is an ally piece there', () => {
		const king = new King(new Square("E", 1), "white");
		const allyPawn = new King(new Square("F", 2), "white");
		const game = new Game([king, allyPawn]);

		const action = () => king.move(new Square("F", 2), game);

		expect(action).toThrow(new Error("Invalid move"));
	});
});
