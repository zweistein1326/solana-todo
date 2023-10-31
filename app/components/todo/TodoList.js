import styles from '../../styles/Todo.module.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, action, removeTodo }) => {
    return (
        <ul className={styles.todoList}>
            {todos.map((todo) => (
                <TodoItem key={todo.account.idx} {...todo.account} publicKey={todo.publicKey} action={action} removeTodo={removeTodo}/>
            ))}
        </ul>
    )
}

export default TodoList
