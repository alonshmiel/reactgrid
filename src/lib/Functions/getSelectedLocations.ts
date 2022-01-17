import { State } from "../Model/State";
import { CellLocation } from "../../core";

export function getSelectedLocations(state: State): Array<CellLocation[]> {
  return state.selectedRanges.map((selectedRange) => {
    return selectedRange.rows.flatMap((row) => {
      return selectedRange.columns.map<CellLocation>((col) => ({
        columnId: col.columnId,
        rowId: row.rowId,
      }));
    });
  });
}
