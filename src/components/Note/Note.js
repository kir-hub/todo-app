import React, {useState, useEffect} from 'react'
import './styles.css'

export default function Note(props) {

    const {title, remove, index, edit, mark} = props

    const [newTitle, setNewTitle] = useState(title.title)
    const [isEdit, setIsEdit] = useState(false)
    const [done, setDone] = useState(false)
    
    
  

    const isDone =  <input type='checkbox' checked={title.check ? true : false}  onChange={() => mark(index)}/> 
    console.log(title.check);
    const onclose = ()=>{
        edit(newTitle, index)
        setIsEdit(!isEdit)
    }
  

    return (
        <div>
            <h1> {title.title}</h1>
            <button onClick={() => remove(index)}>X</button>
            <button onClick={() => setIsEdit(!isEdit)}> {isEdit ? 'cancel' : 'edit'}</button>
            <div> 
                {isDone}
                
                {isEdit && <input onChange={e => setNewTitle(e.target.value) } value={newTitle}/> }
                
                <button className={isEdit ? "show" : "hide"} onClick={onclose }> confirm</button> 
                <h6> {title.time}</h6>
            </div>
        </div>
    )
}
