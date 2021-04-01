import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Menu, Button} from "antd";
import {useEffect, useState, createContext, useContext, useReducer} from "react";
import ECharts from './components/ECharts'
import ProDashboard from "./components/Dashboard";
import useRequest from "@ahooksjs/use-request";

function App() {
    return (
        <Router basename={'hooks'}>
            <div style={{backgroundColor: '#f5f5f5',height:'800px'}}>
                <Menu mode="horizontal">
                    <Menu.Item><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/About">About</Link></Menu.Item>
                    <Menu.Item><Link to="/Product">Product</Link></Menu.Item>
                    <Menu.Item><Link to="/AsyncContext">AsyncContext</Link></Menu.Item>
                    <Menu.Item><Link to="/AsyncReducer">AsyncReducer</Link></Menu.Item>
                    <Menu.Item><Link to="/echarts">ECharts</Link></Menu.Item>
                    <Menu.Item><Link to="/dashboard">ProDashboard</Link></Menu.Item>
                </Menu>
                <hr/>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
                <Route path="/AsyncContext" component={AsyncContext}/>
                <Route path="/AsyncReducer" component={AsyncReducer}/>
                <Route path="/echarts" component={ECharts}/>
                <Route path="/dashboard" component={ProDashboard}/>
            </div>
        </Router>
    );
}

const Home = () => {

    /*
    * 刷新浏览器就能获取数据
    * */

    let [count, setCounter] = useState(0)
    let [msg, setMsg] = useState('成功')
    const {data, run} = useRequest({url: '/user/get_simple_userinfo'}, {
        manual: true,
        onSuccess(r, p) {
            setMsg(data.msg)
        }
    })

    useEffect(() => {
        run()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h2>Home</h2>
            <span>{count}</span>
            <span>{msg}</span>
            <Button type="primary" onClick={() => setCounter(count + 1)}>+1</Button>
            {/*<Button type="primary" onClick={() => { run()}}>获取数据</Button>*/}
        </div>
    )
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


let Color = createContext({o1: '#FFFFFF'})

const AsyncContext = () => {

    let [o1, setColor] = useState('#FFFFFF')
    // useReducer()

    return (
        <>
            <Color.Provider value={{o1, setColor}}>
                <ColorButton>HH</ColorButton>
            </Color.Provider>
            <ColorButton>HH</ColorButton>
        </>
    )
}

const calcReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'add' :
            return {count: state.count + 1}
        case 'sub' :
            return {count: state.count - 1}
        default:
            new Error()
    }
}

const AsyncReducer = () => {

    let [state, dispatch] = useReducer(calcReducer, {count: 0})
    console.log(state)
    return (
        <>
            <h1>{state.count}</h1>
            <Button onClick={() => dispatch({type: 'add'})}>+1</Button>
            <Button onClick={() => dispatch({type: 'sub'})}>-1</Button>
        </>
    )
}

const ColorButton = (props) => {
    let color = useContext(Color)
    console.log(color)

    const handleClick = () => {
        console.log(color)
        if (color) {
            if (color.o1 === 'red') {
                color.setColor('#FFFFFF');
            } else {
                color.setColor('red');
            }
        }

    }

    return (
        <Button onClick={handleClick} style={{backgroundColor: color.o1}}>{props.children}</Button>
    )
}

export default App;
