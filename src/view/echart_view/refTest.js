import React from 'react';

import { Route, Link } from 'react-router-dom'

import EchartTest from './EchartTest'
import ReactEchartTest from './ReactEchartTest'

import './MainTest.css'

export default class MainTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.aaa = '111'
    }

    componentDidMount() {
        //将组件实例this传递给onRef方法
        this.props.onRef(this)
        console.log(this)
    }

    useclick() {
        this.setState({
            text: this.state.text + '这是父组件调用的方法,'
        })

    }
    // click() {
    //     console.log(this)
    //     console.log(this.aaa)
    //     this.aaa = '222'
    //     console.log(this.aaa)

    // }
    render() {
        return (
            <div >
                {this.state.text} 
                {/* <button onClick={this.click.bind(this)}>dianji</button>
                {this.aaa} */}
            </div>
        );
    }
}
