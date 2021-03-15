import React, {useState, useCallback} from 'react'
import Note from '../Note/Note'

export default function Input(props) {
    const {onAdd} = props

    const [text, setText] = useState('')

    const textHandler = ()=>{
        setText(text)
        onAdd(text)
        setText('')
    }
    const onChangeHandler = useCallback((e)=>{
        setText(e.target.value)
    })

    return (
        <div>
            <input onChange={onChangeHandler} value={text} palceholder='title'/>

            <button onClick={textHandler}> Add todo</button>
        </div>
    )
}
