import AddToDo from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import useTodos from './hooks/useTodos';

const App = () => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    return (
        <div>
            <h2>To Do list</h2>
            <AddToDo onAdd={addTodo} />
            <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
