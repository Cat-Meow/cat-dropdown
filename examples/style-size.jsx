import React, { Component } from 'react';
import Dropdown from '../src/dropdown.js';

export default class Example extends Component {

    render() {
        return (
            <div>
                <Dropdown title="Normal">
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3">测试</Dropdown.Item>
                </Dropdown>

                <Dropdown title="Dropup" noCaret>
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3">测试</Dropdown.Item>
                </Dropdown>
            </div>
        );
    }
}
