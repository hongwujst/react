export default function Theme() {
    var theme = {
        option: {
            yAxis: [{
                //name: '单位:  %',
                nameGap: 5,
                nameTextStyle: {
                    color: "yellow",
                    fontFamily: "Microsoft YaHei",
                    fontSize: 10,
                    align: 'left',
                    padding: [0, 0, 0, 50]
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'yellow',
                        width: 1
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "yellow",
                        width: 1
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "yellow"
                }
            }],
            xAxis: [{
                axisLine: {
                    lineStyle: {
                        color: "yellow",
                        width: 1
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "yellow"
                }
            }]
        },
        series: {
            itemStyle: {
                normal: {
                    borderColor: 'yellow',
                    color: 'yellow'
                }
            }
        }
    };

    return theme;
    
}


