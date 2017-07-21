/**
 * Created by Chad on 2016/11/29.
 */
import * as Actions from '../actions'

export default function UIKitReducer(state = {}, action) {
    switch (action.type) {
        case Actions.SHOW_MESSAGE:
            return Object.assign({}, state, {message: action.message, progress: false, dialog: false});
        case Actions.SHOW_PROGRESS:
            return Object.assign({}, state, {message: action.message, progress: action.progress, dialog: false});
        case Actions.CLEAR_MESSAGE:
            return {};
        case Actions.SHOW_DIALOG:
            return Object.assign({}, state, {message: false, progress: false, dialog: action.dialog});
        default:
            return state;
    }
}