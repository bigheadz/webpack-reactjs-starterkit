import {store} from '../main';
/**
 * 从设计图的px到实际的html的px大小， 按照比例计算
 * @param x
 */
const design_w = 720;
const design_h = 1280;
let screen_w, screen_h;

export function px(x) {
    return `${x * getScale()}px`;
}

export function getScale() {
    // console.log("screen", screen_w, screen_h);
    if (screen_w > screen_h) {
        //landscape
        return screen_h / design_w;
    }
    return screen_w / design_w;
}

export function updateScreenWH(w, h) {
    screen_w = w;
    screen_h = h;
}

export function isPortait() {
    return screen_w < screen_h;
}
