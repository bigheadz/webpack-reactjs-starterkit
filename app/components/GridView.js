/**
 * Created by Chad on 2016/12/1.
 */
import React from "react";
export default class GridView extends React.Component {

    constructor(props) {
        super(props);
        this.updateStyle(props);
    }

    componentWillReceiveProps(props) {
        this.updateStyle(props);
    }

    updateStyle(props) {
        if (props.columnNumber) {
            this.childStyle = {
                float: 'left',
                width: (100 - (props.columnNumber + 1) * 2) / props.columnNumber + '%',
                marginLeft: '2%',
            };
        } else {
            this.childStyle = {
                width: '100%',
            }
        }
    }

    render() {
        let childStyle = Object.assign({}, this.childStyle, this.props.childStyle);
        return (<div style={this.props.style}>
            {this.props.children.map((item, index)=> {
                return <div style={childStyle} key={index}>{item}</div>
            })}
        </div>);
    }
}

GridView.propTypes = {
    columnNumber: React.PropTypes.number,
};




































