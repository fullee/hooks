import {createContext, useContext, useReducer} from "react";
import {Button} from "antd";

const Context = createContext({})

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'add':
            return {...state, count: state.count + 1}
        case 'sub':
            return {...state, count: state.count - 1}
        case 'color':
            return {...state, color: action.payload}
        default:
            new Error()
    }
}

const ContextAndReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, color: '红色'})

    return (
        <Context.Provider value={{state, dispatch}}>
            <Title/>
        </Context.Provider>
    )
}

const Title = () => {
    const val = useContext(Context)

    return <>
        <div>{val.state.count} 号字</div>
        <div>颜色：{val.state.color}</div>
        <Button
            onClick={() => {
                val.dispatch({type: 'add'})
            }}
        >+</Button>
        <Button
            onClick={() => {
                val.dispatch({type: 'sub'})
            }}
        >-</Button>
        <Button
            onClick={() => {
                val.dispatch({type: 'color', payload: '绿色'})
            }}
        >改为绿色</Button>
        <Button
            onClick={() => {
                val.dispatch({type: 'color', payload: '黄色'})
            }}
        >改为黄色</Button>
    </>
}

export default ContextAndReducer
