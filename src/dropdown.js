import React, { Component } from 'react';
import { setClass } from 'rs-util';
import Item from './item';
import Header from './header';
import Divider from './divider';
import DropButton from './dropbutton';

class Dropdown extends Component {
    static propTypes = {
        myStyle: React.PropTypes.string,
        mySize: React.PropTypes.string,
        dropup: React.PropTypes.bool,
        noCaret: React.PropTypes.bool,
        title: React.PropTypes.string,
        trigger: React.PropTypes.string,

        componentClass: React.PropTypes.string
    }

    static defaultProps = {
        myStyle: 'default',
        mySize: 'medium',
        dropup: false,
        noCaret: false,
        title: 'dropdown',
        trigger: 'hover'
    }

    state = {
        visible: false
    }

    handleSelect(key, event) {
        this.props.onSelect && this.props.onSelect(key, event);
    }

    handleClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseOver() {
        if (this.props.trigger === 'hover') {
            this.setState({
                visible: true
            });
        }
    }

    handleMouseLeave() {
        if (this.props.trigger === 'hover') {
            this.setState({
                visible: false
            });
        }
    }

    _renderContent() {
        let self = this;
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                liveKey: self.props.liveKey,
                onSelect: self::self.handleSelect
            });
        });
    }

    render() {
        let { componentClass, dropup, dropright } = this.props,
            { visible } = this.state,
            Node = componentClass || 'div',
            classNames = setClass(`btn-group`, {
                'dropup': dropup,
                'open': visible
            });

        return (
            <Node
                className={classNames}
                onMouseOver={this::this.handleMouseOver}
                onMouseLeave={this::this.handleMouseLeave}
            >
                <DropButton {...this.props} onClick={this::this.handleClick}/>
                <ul className="dropdown-menu">
                    {this._renderContent()}
                </ul>
            </Node>
        );

    }
}

Dropdown.Item = Item;
Dropdown.Divider = Divider;
Dropdown.Header = Header;

export default Dropdown;
