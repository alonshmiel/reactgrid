import * as React from 'react';
import { Cell, CellStyle, CellTemplate, Compatible, Uncertain } from '../Model/PublicModel';
export interface HeaderCell extends Cell {
    type: 'header';
    text: string;
}
export declare class HeaderCellTemplate implements CellTemplate<HeaderCell> {
    getCompatibleCell(uncertainCell: Uncertain<HeaderCell>): Compatible<HeaderCell>;
    render(cell: Compatible<HeaderCell>, isInEditMode: boolean, onCellChanged: (cell: Compatible<HeaderCell>, commit: boolean) => void): React.ReactNode;
    isFocusable: (cell: Compatible<HeaderCell>) => boolean;
    getClassName(cell: Compatible<HeaderCell>, isInEditMode: boolean): string;
    getStyle: (cell: Compatible<HeaderCell>) => CellStyle;
}