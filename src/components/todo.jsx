import { useState } from "react"
import TodoItem from "./TodoItem"

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([
        {
            id: 1, 
            title: "Salom"
        },
        {
            id: 2, 
            title: "Salom"
        },
        {
            id: 3, 
            title: "Salom"
        }
    ])

    //   console.log(todos);
      
      const onAddClick = () => {

        const lastElementId = todos[todos.length - 1]?.id
          const newTodos = [...todos, { id: lastElementId ? lastElementId : 0   + 1,  title: inputValue }]
          setTodos(newTodos)
          setInputValue("")
          console.log(todos)
        }

        const onDelete = (id) => {
            const filteredTodos = todos.filter(t => t.id != id)
            console.log(filteredTodos);
            setTodos(filteredTodos)
            
        }

  return (
    <>
        <div className="todo-container">
            <h2 className="app-title">Todo App</h2>
            <div className="todo-header">
                <input value={inputValue}  onChange={(event) => setInputValue(event.target.value)}  className="add-input" type="text" placeholder="Vazifa yozing..." />
                <button onClick={onAddClick} className="add-btn"> add </button>
            </div>
            <div className="todo-list">
                {
                    todos.map( t => {                        
                        return (
                            <TodoItem key={t.id} id={t.id} title={t.title} onDelete={onDelete} />
                        )
                    } )
                }
            </div>
        </div>
    </>
  )
}

export default Todo