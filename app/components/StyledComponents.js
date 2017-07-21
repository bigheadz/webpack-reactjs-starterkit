/**
 * Created by Chad on 2017/4/6.
 */
import React from 'react';
import styled from 'styled-components'

export const FullDiv = styled.div `
    height: 100%
    background: ${props => props.background ? props.background : 'initial'};
`;

export class ImageButton extends React.Component {
    render() {
        let {src, flipX, flipY, activeSrc, active, ...others} = this.props;
        return <div style={{
            display: 'inline-block',
            boxSizing: 'border-box'
        }} {...others}>
            <div style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                backgroundImage: active ? `url(${activeSrc})` : `url(${src})`,
                backgroundSize: 'contain',
                transform: (flipX || flipY) ? ((flipX ? 'scaleX(-1)' : "") + (flipY ? 'scaleY(-1)' : "") ) : 'initial',
                backgroundRepeat: 'no-repeat'
            }}/>
        </div>
    }
}

export const Image = styled.img `
    transform: ${props => (props.flipX || props.flipY) ? ((props.flipX ? 'scaleX(-1)' : "") + (props.flipY ? 'scaleY(-1)' : "") ) : 'initial'};
    width: ${props => props.width ? props.width : 'initial'};
    height: ${props => props.height ? props.height : 'initial'};
`;

export const RoundDiv = styled.div`
    display: inline-block
    border-radius: 50%
    background: ${props => props.background ? props.background : 'initial'};
    width: ${props => props.width ? props.width : 'initial'};
    height: ${props => props.height ? props.height : 'initial'};
`;