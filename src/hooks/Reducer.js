import {useReducer} from "react";
import {Button} from "antd";

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

    // 类似setState的返回值，本质是一个state和setState
    const [{count}, dispatch] = useReducer(calcReducer, {count: 0})
    return (
        <>
            <h1>{count}</h1>
            <Button onClick={() => dispatch({type: 'add'})}>+1</Button>
            <Button onClick={() => dispatch({type: 'sub'})}>-1</Button>
        </>
    )
}

export default AsyncReducer
