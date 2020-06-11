import React from 'react';

import CompEchartBar from '../../common/echarts/comp_echart_bar'

import './EchartTest.css'

import Theme from './theme.js'

//原生echarts 刷新

export default class EchartTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            data2: null
        }
    }
    change() {
        this.setState({
            data: this.state.data2
        })
    }


    changetimer() {
        var list = this.state.data2;
        list.forEach(item => {
            item.data.forEach(items => {
                items.value = items.value + 10 * Math.round(Math.random())
            });
        });
        this.setState({
            data2: list
        })
    }

    componentDidMount() {
        var data3 = [];
        var tempModel1 = {
            title: "上月",
            chartType: "bar",
            color: "#005485",
            opacity: 0.8,
            data: []
        };
        var tempModel2 = {
            title: "下月",
            chartType: "line",
            color: "red",
            opacity: 0.8,
            data: []
        };

        tempModel1.data.push({ name: '123', value: 113 },
            { name: '122', value: 123 },
            { name: '124', value: 156 },
            { name: '125', value: 43 },
            { name: '126', value: 188 });

        tempModel2.data.push({ name: '123', value: 12 },
            { name: '122', value: 133 },
            { name: '124', value: 188 },
            { name: '125', value: 134 },
            { name: '126', value: 16 });

        data3.push(tempModel1, tempModel2);

        var data2 = [];
        var tempModel3 = {
            title: "上月",
            chartType: "bar",
            color: "#005485",
            opacity: 0.8,
            data: []
        };
        var tempModel4 = {
            title: "下月月",
            chartType: "bar",
            color: "red",
            opacity: 0.8,
            data: []
        };

        tempModel3.data.push({ name: '123', value: 55 },
            { name: '122', value: 33 },
            { name: '124', value: 44 },
            { name: '125', value: 12 },
            { name: '126', value: 2 });

        tempModel4.data.push({ name: '123', value: 45 },
            { name: '122', value: 55 },
            { name: '124', value: 22 },
            { name: '125', value: 31 },
            { name: '126', value: 11 });

        data2.push(tempModel3, tempModel4);
        this.setState({
            data: data3,
            data2: data2
        })

        this.timer = setInterval(() => {
            this.changetimer();
        }, 1000);
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="EchartTest">
                <button onClick={this.change.bind(this)}>切换</button>
                <div>
                    <CompEchartBar dataSource={this.state.data} customTheme={Theme()}
                        id={1}
                        title={'标题'}
                        topLable={"false"}
                        gridTop={'10%'}
                        gridBottom={'5%'}>
                    </CompEchartBar>
                </div>
                <div>
                    <CompEchartBar dataSource={this.state.data2}
                        id={2}
                        title={'标题2'}
                        topLable={"false"}
                        gridTop={'10%'}
                        gridBottom={'5%'}>
                    </CompEchartBar>
                </div>
            </div>
        );
    }
}
