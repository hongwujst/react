import React from 'react';

import './MainTest.css'

import EchartTest from './EchartTest'
import ReactEchartTest from './ReactEchartTest'
import RefTest from './refTest'
import EchartTestHeart from './EchartTest_heart'
import ReactEchartTestHeart from './ReactEchartTest_heart'

export default class MainTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNum: 1
        }

        this.childrenRef = React.createRef();
    }

    componentDidMount() {
        //3.使用onRef={(ref) => this.childrenOnref = ref 方法，都生效，需在子组件内部声明this.props.onRef(this)
        this.childrenOnref.useclick()

        //1.普通方法调用子组件，但是会警告：We recommend using useRef() or createRef() instead
        //this.refs.children.useclick()
    }

    click() {
        //3
        this.childrenOnref.useclick()

        //2.使用React.createRef()方法，但是在componentDidMount不生效
        //  var childrenRef = this.childrenRef.current
        //  childrenRef.useclick()
    }

    tabClick(flag) {
        this.setState({
            tabNum: flag
        })

    }

    render() {
        return (
            <div className="MainTest">
                <div className="MainTest-link">


                    <button onClick={() => this.tabClick(1)}>原始echarts方法</button>
                    <button onClick={() => this.tabClick(2)}>react Echarts 组件方法</button>
                    <button onClick={() => this.tabClick(3)}>原始echarts方法：心电图</button>
                    <button onClick={() => this.tabClick(4)}>react Echarts 组件方法：心电图</button>

                    {/* 测试父组件调用子组件方法 */}
                    <button onClick={this.click.bind(this)}>dianji</button>
                    <RefTest onRef={(ref) => this.childrenOnref = ref} ref={this.childrenRef}></RefTest>
                </div>

                <div className="MainTest-content">
                    {
                        this.state.tabNum === 1 ? (
                            <EchartTest></EchartTest>
                        ) : null
                    }
                    {
                        this.state.tabNum === 2 ? (
                            <ReactEchartTest></ReactEchartTest>
                        ) : null
                    }
                    {
                        this.state.tabNum === 3 ? (
                            <EchartTestHeart></EchartTestHeart>
                        ) : null
                    }
                    {
                        this.state.tabNum === 4 ? (
                            <ReactEchartTestHeart></ReactEchartTestHeart>
                        ) : null
                    }

                    {/* 1.普通方法ref调用
                    <RefTest  ref="children"></RefTest> */}

                </div>
            </div>
        );
    }
}
