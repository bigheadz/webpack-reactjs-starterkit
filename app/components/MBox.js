/**
 * Created by Chad on 2017/4/14.
 * 基于Materilize的一些工具类
 */
import React from 'react';

export default class MBox extends React.Component {
    render() {
        // console.log('MBox', this.props);
        let {className, vAlign, hAlign, children, ...others} = this.props;
        let style = {display: 'inline-box'};
        className = className || '';
        let spanClass = '';
        if (vAlign == 'center') {
            className += " valign-wrapper";
            spanClass += " valign";
        }


        if (hAlign == 'center') {
            spanClass += ' center-align'
        } else if (hAlign == 'left') {
            spanClass += ' left-align'
        } else if (hAlign == 'right') {
            spanClass += ' right-align'
        }
        return <div className={className} style={style}  {...others}>
            <span style={{width: '100%'}} className={spanClass}>
                {children}
            </span>
        </div >
    }
}
