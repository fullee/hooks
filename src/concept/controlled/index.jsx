/**
 * 受控组件和非受控组件
 *
 * 受控组件跟react的state做绑定，可以通过操作state来get、set从而影响表单的value
 * 非受控组件跟react的state没联系，甚至跟react没联系，可以通过dom的方式来操作表单
 */

import { useRef, useState} from "react";

const Controlled = ()=>{

    const [color,setColor] = useState('red')

    const handleChange = (e) =>{
        setColor(e.target.value)
    }

    return (
        <div>
            <span>受控组件: {color}</span>
            <form >
                <input onChange={handleChange} value={color}/>
            </form>
        </div>
    )
}

const UnControlled = ()=>{

    const fInput = useRef()

    const [color,setColor] = useState('red')

    const handleChange = (e) =>{
        setColor(fInput.current.value)
    }


    return (
        <div>
            <span>非受控组件: {color}</span>
            <form>
                <input ref={fInput} onChange={handleChange}/>
            </form>
        </div>
    )
}

export {Controlled,UnControlled};
