export interface Size {
    width: number;
    height: number;
}

export interface ScreenCoords {
    left: number;
    top: number;
}

export interface ScreenRect extends ScreenCoords, Size {}

export function sizeFitsIn(smaller: Size, greater: Size): boolean {
    return smaller.width <= greater.width && smaller.height <= greater.height;
}
