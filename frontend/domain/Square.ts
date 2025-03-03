type Column = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export class Square {
	private _column: Column;
	private _row: Row;

	constructor(column: Column, row: Row) {
		this._column = column;
		this._row = row;
	}

	get column() {
		return this._column;
	}

	get row() {
		return this._row;
	}

	public toString(): string {
		return `${this._column}${this._row}`;
	}

	public equals(square: Square): boolean {
		return this._column === square.column && this._row === square.row;
	}

	public copySquareLeft(): Square | undefined {
		const leftColumn = Square.getLeftColumn(this._column);
		if (!leftColumn) {
			return undefined;
		}
		return new Square(leftColumn, this._row);
	}

	public copySquareRight(): Square | undefined {
		const rightColumn = Square.getRightColumn(this._column);
		if (!rightColumn) {
			return undefined;
		}
		return new Square(rightColumn, this._row);
	}

	public copySquareAbove(): Square | undefined {
		const rowAbove = Square.getRowAbove(this._row);
		if (!rowAbove) {
			return undefined;
		}
		return new Square(this._column, rowAbove);
	}

	public copySquareBelow(): Square | undefined {
		const rowBelow = Square.getRowBelow(this._row);
		if (!rowBelow) {
			return undefined;
		}
		return new Square(this._column, rowBelow);
	}

	private static getLeftColumn(column: Column): Column | undefined {
		switch (column) {
			case "A":
				return undefined;
			case "B":
				return "A";
			case "C":
				return "B";
			case "D":
				return "C";
			case "E":
				return "D";
			case "F":
				return "E";
			case "G":
				return "F";
			case "H":
				return "G";
		}
	}

	private static getRightColumn(column: Column): Column | undefined {
		switch (column) {
			case "A":
				return "B";
			case "B":
				return "C";
			case "C":
				return "D";
			case "D":
				return "E";
			case "E":
				return "F";
			case "F":
				return "G";
			case "G":
				return "H";
			case "H":
				return undefined;
		}
	}

	private static getRowBelow(row: Row): Row | undefined {
		switch (row) {
			case 1:
				return undefined;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
		}
	}

	private static getRowAbove(row: Row): Row | undefined {
		switch (row) {
			case 1:
				return 2;
			case 2:
				return 3;
			case 3:
				return 4;
			case 4:
				return 5;
			case 5:
				return 6;
			case 6:
				return 7;
			case 7:
				return 8;
			case 8:
				return undefined;
		}
	}
}
