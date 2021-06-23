import {createContext, useContext, useState} from "react";
import {Button} from "antd";

/**
 * 这是一个生产消费模型
 */
let Color = createContext({o1: '#FFFFFF'})

const ColorButton = (props) => {
    /**
     * 消费者
     */
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

const AsyncContext = () => {

    let [o1, setColor] = useState('#FFFFFF')

    return (
        <>
            {/* 生产者，提供一个state和setState */}
            <Color.Provider value={{o1, setColor}}>
                <ColorButton>正常</ColorButton>
            </Color.Provider>
            {/* 没有生产者，消费就会报错 */}
            <ColorButton>异常</ColorButton>
        </>
    )
}

export default AsyncContext
