import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Menu, Button} from "antd";
import {useState} from "react";
import ECharts from './components/ECharts'
import ProDashboard from "./components/Dashboard";
import AsyncContext from "./hooks/Context"
import AsyncReducer from "./hooks/Reducer"
import useRequest from "@ahooksjs/use-request";
import Concept from "./concept";
import ContextAndReducer from "./hooks/ContextAndReducer";

function App() {
    return (
        <Router basename={'hooks'}>
            <div style={{backgroundColor: '#f5f5f5', height: '800px'}}>
                <Menu mode="horizontal">
                    <Menu.Item><Link to="/">Concept</Link></Menu.Item>
                    <Menu.Item><Link to="/About">About</Link></Menu.Item>
                    <Menu.Item><Link to="/Product">Product</Link></Menu.Item>
                    <Menu.Item><Link to="/AsyncContext">AsyncContext</Link></Menu.Item>
                    <Menu.Item><Link to="/AsyncReducer">AsyncReducer</Link></Menu.Item>
                    <Menu.Item><Link to="/echarts">ECharts</Link></Menu.Item>
                    <Menu.Item><Link to="/dashboard">ProDashboard</Link></Menu.Item>
                    <Menu.Item><Link to="/car">ContextAndReducer</Link></Menu.Item>
                </Menu>
                <hr/>
                <Route path="/" exact component={Concept}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
                <Route path="/AsyncContext" component={AsyncContext}/>
                <Route path="/AsyncReducer" component={AsyncReducer}/>
                <Route path="/echarts" component={ECharts}/>
                <Route path="/dashboard" component={ProDashboard}/>
                <Route path="/car" component={ContextAndReducer}/>
            </div>
        </Router>
    );
}


const About = () => {

    /*
     * 点击按钮获取数据
     * */

    let [msg, setMsg] = useState('成功')
    const {data, run} = useRequest({url: '/user/get_simple_userinfo'}, {
        manual: true,
        onSuccess(r, p) {
            setMsg(data.msg)
        }
    })

    return (
        <div>
            <h2>Abloud</h2>
            <span>{msg}</span>
            <Button type="primary" onClick={() => {
                run()
            }}>获取数据</Button>
        </div>
    )
}

const Product = () => {
    /*
     * 刷新页面直接获取数据
     * */

    const {data, loading} = useRequest({url: '/user/get_simple_userinfo'})

    if (!loading) {
        return <div>Product Username1122333: {data.msg}</div>;
    }

    return <div>暂无数据</div>;
}




export default App;
