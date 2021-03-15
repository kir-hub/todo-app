import React, {useState, useEffect, useCallback} from 'react'
import './styles.css'

export default function Note(props) {

    const {title, remove, index, edit, mark} = props

    const [newTitle, setNewTitle] = useState(title.title)
    const [isEdit, setIsEdit] = useState(false)
    
    
    
    const callbackTitle = useCallback((e)=>{
        setNewTitle(e.target.value)
    })

    const callbackCheckbox = useCallback(()=>{
        mark(index)
    },[index])

    
      
    const onclose = ()=>{
        edit(newTitle, index)
        setIsEdit(!isEdit)
    }

    const deleteHandler =()=>{
        remove(index)
    }
    const editHandler =()=>{
        setIsEdit(!isEdit)
    }
  

    return (
        <div>
            <h1> {title.title}</h1>
            <button onClick={deleteHandler}>X</button>
            <button onClick={editHandler}> {isEdit ? 'cancel' : 'edit'}</button>
            <div> 
                {<input type='checkbox' checked={title.check ? true : false}  onChange={callbackCheckbox}/>}
                
                {isEdit && <input onChange={callbackTitle } value={newTitle}/> }
                
                <button className={isEdit ? "show" : "hide"} onClick={onclose }> confirm</button> 
                <h6> {title.time}</h6>
            </div>
        </div>
    )
}
