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
}
