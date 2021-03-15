import React, {useState, useEffect} from 'react'
import Input from '../NoteInput/NoteInput'
import Note from '../Note/Note'

// пользователь может добавлять заметки
// пользователь может удалять заметки
// пользователь может редактировать заметки
// данные сохраняются в локальное хранилище
// рядом с заметкой появляетя дата создания

const getTodos =()=>{
    const data = localStorage.getItem('todos') 
    if(!data){
        return []
    }
    return JSON.parse(data)

}

export default function NoteList(props) {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [check, setCheck] = useState(false)
    const [editorHandler, setEditorHandler] = useState(true)



    useEffect(()=>{
        const newTodos = getTodos()
        setTodos(newTodos)
        console.log(todos);
        
    }, [])

    useEffect(()=>{
        if(todos.length > 0){
            localStorage.setItem('todos', JSON.stringify(todos))
            console.log(todos);
        }
        if(todos.length == 0){
            localStorage.clear()
        }

    },[todos])



    const handleSubmit =(value)=>{
        if (!value) return;
        addTodo(value)
        setValue('')
        
    }

    

    const editTodo =(title, index,)=>{
        const newTodos = [...todos]
        const date = new Date

        newTodos.splice(index,1, {title: title, time: date.getHours()+ ':' + date.getMinutes()})
        setEditorHandler(!editorHandler)
        setTodos(newTodos)

    }

    const mark = (index)=>{
        const newTodos =[...todos]
        setCheck(!check)
        newTodos[index].check = check

        setTodos(newTodos)


    }

    

    const addTodo = (value) =>{
        const date = new Date
        const newTodos = [{ check: false, title: value, time: date.getHours()+ ':' + date.getMinutes()}, ...todos]
        setTodos(newTodos)

        
    }

    const removeTodo = index =>{
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)

    }

    const onAdd = ()=>{

    }

    

    return (
        <div>
            <Input  onAdd={handleSubmit}/>
            
            <ul> 
                {todos.map((todos, index) => (
        <li key={index}> <Note editorHandler={editorHandler} mark={mark} check={check} title={todos} index={index} remove={removeTodo} edit={editTodo}/> </li>
    ))}
            </ul>
        </div>
    )
}
