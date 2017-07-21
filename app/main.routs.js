/**
 * Created by Chad on 2017/7/21.
 */
import * as Constants from "./constants";
import HomePage from "./containers/HomePage";
import {AppRoot} from "./containers/AppRoot";
import React from 'react';
import {Route, IndexRoute} from 'react-router'

export const main_routes = (<Route path={Constants.PATH_ROOT} onEnter={() => {
    }} onChange={() => {
    }} components={AppRoot}>
        <Route onEnter={() => {
        }} path={Constants.PATH_HOME + "/:id"} components={HomePage}/>
        <IndexRoute component={HomePage}/>
    </Route>
);