import {useRef} from "react";
import useEcharts from "./useEcharts";

const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

const ECharts = () => {

    let echartsRef = useRef()

    useEcharts(echartsRef,option)

    let echartsRef1 = useRef()
    useEcharts(echartsRef1,option)

    return <>
        <div style={{width: "400px", height: "400px"}}  ref={echartsRef} />
        <div style={{width: "400px", height: "400px"}}  ref={echartsRef1} />
    </>
}

export default ECharts
