import React, {useState, useEffect} from 'react'
import NoteInput from '../NoteInput/NoteInput'
import Note from '../Note/Note'

// пользователь может добавлять заметки
// пользователь может удалять заметки
// пользователь может редактировать заметки
// данные сохраняются в локальное хранилище
// рядом с заметкой появляетя дата создания

export default function NoteList(props) {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([{ title: '', time: '' }])

    useEffect(()=>{
        const data = localStorage.getItem('1')
        setTodos(()=> JSON.parse(data))
        console.log(todos);
        
    }, [])


    const handleSubmit =()=>{
        if (!value) return;
        addTodo(value)
        setValue('')
        
    }

    const editTodo =(title, index)=>{
        const newTodos = [...todos]
        newTodos.splice(index,1, {title: title})
        setTodos(newTodos)
        localStorage.setItem('1', JSON.stringify(todos))

    }
    const addTodo = () =>{
        const date = new Date
        const newTodos = [...todos, { title: value, time: date.getHours()+ ':' + date.getMinutes()}]
        setTodos(newTodos)
        localStorage.setItem('1', JSON.stringify(todos))
    }

    const removeTodo = index =>{
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
        localStorage.setItem('1', JSON.stringify(todos))

    }

    const listed = todos.map((todos, index) => (
        <li key={index}> <Note  title={todos} index={index} remove={removeTodo} edit={editTodo}/> </li>
    ))

    return (
        <div>
            <input onChange={e => setValue(e.target.value)} value={value} palceholder='title'/>

            <button onClick={handleSubmit}> AddTodo</button>
            <ul> 
                {listed}
            </ul>
        </div>
    )
}
