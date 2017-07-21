/**
 * Created by Chad on 2017/5/5.
 */
import React from 'react';

export class LongPressWrapper extends React.Component {
    constructor() {
        super();
        this.state = {active: false};
    }

    render() {
        console.log("LongPressWrapper", this.props);
        let {
            Wrapper, children, onLongPress, onClick,
            onTouchStart = (() => {
            }), onTouchEnd = (() => {
        }), ...others
        } = this.props;
        let child_props = Object.assign({}, children.props, {active: this.state.active});
        children = Object.assign({}, children, {props: child_props});
        console.log("LongPressWrapper", children);
        return <Wrapper
            onTouchStart={(e) => {
                if (onClick) {
                    e.preventDefault();
                }
                this.longPressing = false;
                this.onPress = setTimeout(() => {
                    this.longPressing = true;
                    onLongPress()
                }, 1500);
                {/*console.log("touch start");*/
                }
                this.setState({active: true});
                onTouchStart();
            }}
            onTouchCancel={() => {
                {/*console.log("touch cancel");*/
                }
                clearTimeout(this.onPress);
                this.setState({active: false});
                onTouchEnd();

            }}
            onTouchEnd={() => {
                {/*console.log("touch end");*/
                }
                if (!this.longPressing && onClick) {
                    try {
                        onClick();
                    } catch (e) {

                    }
                }
                clearTimeout(this.onPress);
                {/*this.props.style.opacity = '1'*/
                }
                this.setState({active: false});
                onTouchEnd();
            }} {...others}>
            {children}
        </Wrapper>;
    }

    // style={{opacity: (this.state.active == true ? '0.5' : '1')}}

    componentWillUnmount() {
        clearTimeout(this.onPress);
    }
}

export class DivWrapper extends React.Component {
    getRefId() {
        if (this.refId) {
            return this.refId;
        } else {
            this.refId = Math.ceil(Math.random() * 10000);
            return this.refId;
        }
    }

    render() {
        console.log('DivWrapper', this.props);
        let {style, ...others} = this.props;
        return <div className="noPopoutLongPressing" style={style} {...others} ref={'lbutton' + this.getRefId()}/>
    }

    componentDidMount() {
        console.log("longPressButton", this.refs);
        let e = this.refs['lbutton' + this.getRefId()]
        if (!e) {
            console.error("long press button get fail");
        } else {
            console.log("longPressButton", e);
            e.removeEventListener("touchstart", onTouchStart);
            e.addEventListener("touchstart", onTouchStart);
            console.log("longPressButton changed:", e);
        }
    }
}

export class SpanWrapper extends React.Component {

    getRefId() {
        if (this.refId) {
            return this.refId;
        } else {
            this.refId = Math.ceil(Math.random() * 10000);
            console.log("CHAD", this.refId);
            return this.refId;
        }

    }


    render() {
        return <span {...this.props} ref={'lbutton' + this.getRefId()}/>
    }

    componentDidMount() {
        console.log("longPressButton", this.refs);
        let e = this.refs['lbutton' + this.getRefId()]
        if (!e) {
            console.error("long press button get fail");
        } else {
            console.log(e);
            e.removeEventListener("touchstart", onTouchStart);
            e.addEventListener("touchstart", onTouchStart);
        }
    }
}

function onTouchStart(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    return false;
}