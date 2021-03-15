import React, {useState} from 'react'
import Note from '../Note/Note'

export default function NoteInput(props) {

    const [text, setText] = useState('')
    const noteItem = <Note title={text} />

   const textHandler = ()=>{
       setText(text)
   }

    return (
        <div>
            <input onChange={e => setText(e.target.value)} value={text} palceholder='title'/>

            <button onClick={textHandler}> Add</button>
        </div>
    )
}
