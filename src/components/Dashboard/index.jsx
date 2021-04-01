import ReactResizeObserver from "rc-resize-observer";
import StatisticCard from "@ant-design/pro-card/lib/components/StatisticCard";
import {useRef, useState} from "react";
import {Tabs, Card, Row, Col} from "antd";
import numeral from 'numeral';
import './index.less'
import useEcharts from "../ECharts/useEcharts";

const {TabPane} = Tabs;

const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};

const option = {
    title: {
        text: '趋势图',
        textStyle: {
            fontSize: '14px',
            fontWeight: 'normal'
        },
        left: 20
    },
    tooltip: {},
    legend: {
        show: false
    },
    grid: {
        left: 50,
        right: 0
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子",
            "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
    }]
};

const ProDashboard = () => {
    const [responsive, setResponsive] = useState(false);

    let echartsRef = useRef(null)
    useEcharts(echartsRef, option)

    const [ero,setEro] = useState(option)
    let echartsRef1 = useRef(null)
    useEcharts(echartsRef1, ero)

    const rankingListData = [];
    for (let i = 0; i < 10; i += 1) {
        rankingListData.push({
            title: '11111' + i,
            total: 323234,
        });
    }

    const rankingListData1 = [];
    for (let i = 0; i < 10; i += 1) {
        rankingListData1.push({
            title: '2222' + i,
            total: 323234,
        });
    }

    const loading = false
    const [top10,setTop10] = useState('检测站采样量排名')

    const handleChangeTab = () =>{

        const eee = {
            title: {
                text: '趋势图',
                textStyle: {
                    fontSize: '14px',
                    fontWeight: 'normal'
                },
                left: 20
            },
            tooltip: {},
            legend: {
                show: false
            },
            grid: {
                left: 50,
                right: 0
            },
            xAxis: {
                data: ["流程福", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子",
                    "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            }]
        };
        setEro(eee)

        setTop10((preVal)=>{
            return preVal === '检测站合格率排名'? '检测站采样量排名':'检测站合格率排名'
        })
    }


    return <>
        <ReactResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 640);
            }}
        >
            <div style={{margin: '20px'}}>
                <StatisticCard.Group  direction={responsive ? 'column' : undefined}>
                    <StatisticCard
                        statistic={{
                            title: '支付金额',
                            value: 2176,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: '访客数',
                            value: 475,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: '支付成功订单数',
                            value: 87,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: '浏览量',
                            value: 1754,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                </StatisticCard.Group>
            </div>

        </ReactResizeObserver>
        <div style={{margin: '20px'}}>
            <Card loading={loading} bordered={false} bodyStyle={{padding: 0}}>
                <div className="salesCard">
                    <Tabs size="small" onChange={handleChangeTab} tabBarStyle={{marginBottom: 20, paddingLeft: 16}}>
                        <TabPane tab="月采样视图" key="sales">
                            <Row>
                                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                                    <div ref={echartsRef} style={{width: "100%", height: "400px"}}/>
                                </Col>
                                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                                    <div className="salesRank">
                                        <h4 className="rankingTitle">{top10}</h4>
                                        <ul className="rankingList">
                                            {rankingListData.map((item, i) => (
                                                <li key={item.title}>
                                                <span
                                                    className={`rankingItemNumber ${i < 3 ? 'active' : ''}`}>{i + 1}</span>
                                                    <span className="rankingItemTitle"
                                                          title={item.title}>{item.title}</span>
                                                    <span
                                                        className="rankingItemValue">{numeral(item.total).format('0,0')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="月合格率视图" key="views">
                            <Row>
                                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                                    <div ref={echartsRef1} style={{width: "100%", height: "400px"}}/>
                                </Col>
                                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                                    <div className="salesRank">
                                        <h4 className="rankingTitle">{top10}</h4>
                                        <ul className="rankingList">
                                            {rankingListData1.map((item, i) => (
                                                <li key={item.title}>
                                                <span
                                                    className={`rankingItemNumber ${i < 3 ? 'active' : ''}`}>{i + 1}</span>
                                                    <span className="rankingItemTitle"
                                                          title={item.title}>{item.title}</span>
                                                    <span
                                                        className="rankingItemValue">{numeral(item.total).format('0,0')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>
            </Card>
        </div>
    </>
}

export default ProDashboard
