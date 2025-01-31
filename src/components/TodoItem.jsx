
const TodoItem = ({ title, id, onDelete }) => {
  return (
    <>
        <div className="todo">
            <span> {id}.  {title} </span>
            <i onClick={() => onDelete(id) } class="fa-regular fa-trash-can"></i>
        </div>
    </>
  )
}

export default TodoItem