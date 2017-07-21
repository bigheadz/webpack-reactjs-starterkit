/**
 * Created by Chad on 2016/11/29.
 */
import {WINDOW_RESIZE} from '../actions/index'
import {getBodyHeight, getBodyWidth} from '../utils/screen.js'

export default function ScreenReducer(state = {
    width: getBodyWidth(),
    height: getBodyHeight()
}, action) {
    switch (action.type) {
        case WINDOW_RESIZE:
            return {width: action.width, height: action.height};//一定要传一个新的对象回去， 否则刷新判断会出问题
        default:
            return state;
    }
}