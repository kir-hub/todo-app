import React, {useState} from 'react'

export default function Note(props) {

    const {title, remove, index, edit} = props

    const [newTitle, setNewTitle] = useState(title.title)
    const [isEdit, setIsEdit] = useState(false)



    return (
        <div>
            <h1>{title.title}</h1>
            <button onClick={() => remove(index)}>X</button>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <div> 
                <input onChange={e => setNewTitle(e.target.value) } value={newTitle}/>
                <button onClick={() => edit(newTitle, index)}> ok</button> 
                <h6> {title.time}</h6>
            </div>
        </div>
    )
}
