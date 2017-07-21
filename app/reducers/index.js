/**
 * Created by Chad on 2016/9/1.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ScreenReducer from './ScreenReducer';
import UIKitReducer from './UIKitReducer';
// import {reducers as PageReducers} from '../module/page/index';

const rootReducer = combineReducers({
    UIKit: UIKitReducer,
    screen: ScreenReducer,
    routing: routerReducer,
    // page: PageReducers
});

export default rootReducer;