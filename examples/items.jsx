import React, { Component } from 'react';
import Dropdown from '../src/dropdown.js';

export default class Example extends Component {

    render() {
        return (
            <div>
                <Dropdown title="Simple">
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3">测试</Dropdown.Item>
                </Dropdown>
                <Dropdown title="With Divider">
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                </Dropdown>
                <Dropdown title="With Header">
                    <Dropdown.Header>Header</Dropdown.Header>
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                </Dropdown>
                <Dropdown title="With Disabled">
                    <Dropdown.Item eventKey="1">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3" disabled>测试不可用</Dropdown.Item>
                </Dropdown>
                <Dropdown title="With Link">
                    <Dropdown.Item eventKey="1" href="http://www.meituan.com">价格劣势场次</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="http://www.meituan.com">独家策略</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href="http://www.meituan.com" disabled>测试不可用</Dropdown.Item>
                </Dropdown>
            </div>
        );
    }
}
