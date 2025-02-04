import { Game } from "./Game";
import { King } from "./King";
import { Square } from "./Square";

describe('King', () => {
	it('should allow moving the king forward when there is no ally figure in that square', () => {
		const game = new Game([]);
		const king = new King(new Square('E', 1), 'white');

		king.move(new Square('E', 2), game);

		expect(king.square).toEqual(new Square('E', 2));
	})
})