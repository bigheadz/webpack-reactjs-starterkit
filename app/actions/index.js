/**
 * Created by Chad on 2016/12/1.
 */

export const WINDOW_RESIZE = "window.resize";
export function getWindowResizeAction(width, height) {
    return {
        type: WINDOW_RESIZE,
        width,
        height,
    }
}