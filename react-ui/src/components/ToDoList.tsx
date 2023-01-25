import { Todo } from '../types';
import ToDoListItem from './ToDoListItem';

interface IToDoList {
    todos: Todo[];
    toggleTodo: (id: string) => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
}

const ToDoList = ({ todos, toggleTodo, deleteTodo }: IToDoList) => {
    return (
        <div>
            {todos.map((todo) => (
                <ToDoListItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onChecked={toggleTodo} onDelete={deleteTodo} />
            ))}
        </div>
    );
};

export default ToDoList;
