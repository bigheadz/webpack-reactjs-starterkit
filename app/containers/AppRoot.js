/**
 * Created by Chad on 2017/7/21.
 */
import React from "react";
export class AppRoot extends React.Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}
