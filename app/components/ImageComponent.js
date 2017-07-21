/**
 * Created by Chad on 2017/5/17.
 */
import React from 'react';
import styled from 'styled-components';
export class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.defaultStyle = (props) => ({
            display: 'inline-block',
            width: this.props.width,
            height: this.props.height ? this.props.height : this.props.width,
            margin: this.props.margin,
        });
    }

    render() {
        console.log("ImageComponent", this.props);
        let {style, width, height, margin, src, activeSrc, ...others} = this.props;
        style = Object.assign({}, this.defaultStyle(style), style);

        return <_Img style={style} src={`url(${this.props.src})`}
                     activeSrc={`url(${this.props.activeSrc})`} {...others}/>

    }
}
// 下面的写法是因为LongPress会吃掉active状态， 写代码实现下传active参数
const _Img = styled.div `
    background-image: ${(props) => props.active ? props.activeSrc : props.src};
    background-size: contain;
    background-repeat: no-repeat;
    &:active {
        background-image: ${(props) => props.activeSrc};
    }
`;
