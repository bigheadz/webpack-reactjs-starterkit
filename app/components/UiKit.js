/**
 * Created by Chad on 2017/3/1.
 */
import React from 'react';
import styled from 'styled-components';
import Progress from '../components/Progress';
import Dialog from '../components/Dialog';
import {alignCenter} from '../utils/layout';

export default class UiKit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<FullDiv height={this.props.height}
                         visible={this.props.message || this.props.progress || this.shallRenderDialog()}
                         background={this.shallRenderDialog() ? 'transparent' : undefined}>
            {this.shallRenderDialog() ?
                alignCenter(<Dialog
                    message={this.props.dialog.message}
                    onNegButton={this.props.dialog.negButton}
                    onPosButton={this.props.dialog.posButton}
                />) : undefined}
            {alignCenter(
                <div id="progress">
                    {this.props.progress ? <ProgressWrapper><Progress/></ProgressWrapper> : undefined}
                    {this.props.message ? <MessageWrapper>{this.props.message}</MessageWrapper> : undefined}
                </div>
            )}
        </FullDiv>);
    }

    shallRenderDialog() {
        return this.props.dialog;
    }
}


const FullDiv = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    position: absolute;
    background: ${props => props.background ? props.background : '#eee'};
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

const ProgressWrapper = styled.div `
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-left: 30px;
`;

const MessageWrapper = styled.div `
    display: inline-block;
    line-height: 1.5em;    
    font-size: 1.5em;
    margin: 0px 10px 0px 10px;
`;