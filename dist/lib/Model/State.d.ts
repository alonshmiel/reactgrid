import { Behavior, Range, Location, CellChange, CellMatrix } from '.';
import { CellTemplates, Cell, ReactGridProps, Compatible, Highlight } from './PublicModel';
import { DefaultBehavior } from '../Behaviors/DefaultBehavior';
export declare type StateModifier<TState extends State = State> = (state: TState) => TState;
export declare type StateUpdater = (modifier: StateModifier) => void;
export interface State<TCellMatrix extends CellMatrix = CellMatrix, TBehavior extends Behavior = Behavior> {
    update: StateUpdater;
    readonly props?: ReactGridProps;
    readonly legacyBrowserMode: boolean;
    readonly cellMatrix: TCellMatrix;
    readonly currentBehavior: TBehavior;
    readonly focusedLocation?: Location;
    readonly cellTemplates?: CellTemplates;
    hiddenFocusElement?: HTMLDivElement;
    readonly reactGridElement?: HTMLDivElement;
    readonly scrollableElement?: HTMLElement | (Window & typeof globalThis);
    readonly queuedCellChanges: CellChange[];
    currentlyEditedCell?: Compatible<Cell>;
    readonly disableFloatingCellEditor: boolean;
    readonly highlightLocations: Highlight[];
    readonly visibleRange?: Range;
    readonly topScrollBoudary: number;
    readonly bottomScrollBoudary: number;
    readonly leftScrollBoudary: number;
    readonly rightScrollBoudary: number;
}
export declare const defaultStateFields: {
    legacyBrowserMode: boolean;
    focusedLocation: undefined;
    currentBehavior: DefaultBehavior;
    cellTemplates: undefined;
    hiddenFocusElement: undefined;
    reactGridElement: undefined;
    scrollableElement: undefined;
    queuedCellChanges: never[];
    currentlyEditedCell: undefined;
    disableFloatingCellEditor: boolean;
    highlightLocations: never[];
    visibleRange: undefined;
    topScrollBoudary: number;
    bottomScrollBoudary: number;
    leftScrollBoudary: number;
    rightScrollBoudary: number;
};