/**
 * Created by Chad on 2016/12/1.
 */
import React from "react"; //注意， 要引入这个， 只是jsx写法，其实就是用了React
import configureStore from "./configureStore";
import {Provider} from "react-redux";
import * as Actions from "./actions";
import {getBodyWidth, getBodyHeight} from "./utils/screen";
import {syncHistoryWithStore} from "react-router-redux";
import {Router, browserHistory} from "react-router";
import {updateScreenWH} from "./utils/PositionUtil";
import {main_routes} from "./main.routs";

console.log("init the store");
export const store = configureStore();

updateScreenWH(getBodyWidth(), getBodyHeight());
window.addEventListener("resize", function () {
    updateScreenWH(getBodyWidth(), getBodyHeight());
    store.dispatch(Actions.getWindowResizeAction(getBodyWidth(), getBodyHeight()));
});

const root = <Provider store={store}>
        <Router routes={main_routes} history={syncHistoryWithStore(browserHistory, store)}/>
    </Provider>
    ;

export default root;