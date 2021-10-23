import {createContainer} from "unstated-next";
import {useState} from "react";

function useCounter(initialState = 0) {
    let [count, setCount] = useState(initialState);
    let decrement = () => setCount(count - 1)
    let increment = () => setCount(count + 1)

    return {count, decrement, increment}
}

let {useContainer,Provider} = createContainer(useCounter)


function CounterDisplay() {
    let {count, decrement, increment} = useContainer()

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export function UnstatedNextApp() {
    return (
        <Provider>
            <CounterDisplay />
        </Provider>
    )
}