/**
 * Created by Chad on 2017/3/6.
 */
import React from 'react';
import styled from 'styled-components';

export default class Dialog extends React.Component {
    render() {
        return (
            this.props.child ? <div>this.props.child</div> : this.renderDefault()
        );
    }

    renderDefault() {
        return <DialogBackground id="dialogBg">
            <div>{this.props.message}</div>
            <div>
                {this.props.onPosButton ? <Button onClick={this.props.onPosButton}>确认</Button> : undefined }
                {this.props.onNegButton ? <Button onClick={this.props.onNegButton}>取消</Button> : undefined }
            </div>
        </DialogBackground>
    }
}

const DialogBackground = styled.div `
    border: 1px;
    background: #eee;
    text-align: center;
    height: 100%;
    font-size: 1.5em;
    color: #222;
`;

const Button = styled.span `
    display: inline-block;
    margin: 0px 20px 0px 20px;
    font-size: 1.5em;
`;