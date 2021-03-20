import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Button} from "antd";
import {useEffect, useState} from "react";
import useRequest from "@ahooksjs/use-request";

const Home = () => {

    let [count, setCounter] = useState(0)
    let [msg, setMsg] = useState('成功')
    const {data, run} = useRequest({url: '/user/get_simple_userinfo'}, {
        // manual: true,
        onSuccess(r, p) {
            setMsg(data.msg)
        }
    })

    console.log(111)
    useEffect(()=>{
        run()
    },[])// eslint-disable-line react-hooks/exhaustive-deps

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


const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
)


function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Product</Link>
                <hr/>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
            </div>
        </Router>
    );
}

export default App;
