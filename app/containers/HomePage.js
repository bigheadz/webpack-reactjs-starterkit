/**
 * Created by Chad on 2017/7/21.
 */
import React from "react";
import {connect} from "react-redux";

class HomePage extends React.Component {
    render() {
        return <div>
            Welcome to react starter kit, please read readme.md, and enjoy it.<br/>
            Any suggestion or bugs, feel free to contact me!
            chenduzhangchao@qq.com
            QQ: 99391063
        </div>
    }
}

export default connect((state) => ({}))(HomePage)