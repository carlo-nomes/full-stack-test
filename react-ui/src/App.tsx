import { useEffect } from 'react';
import useTodos from './useTodos';

import './index.css';
import List from './List';
import Loader from './Loader';
import Form from './Form';

export default function App() {
    const [todos, { getAllTodos, addTodo, deleteTodo, toggleTodo }, { loading }] = useTodos();

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto border-x relative px-20 pt-20 min-h-screen">
            <Loader loading={loading} />
            <p className="text-lg font-medium">Add todo</p>
            <Form addTodo={addTodo} loading={loading} />
            <div className="flex flex-col gap-12 my-12">
                <List title="Completed" todos={todos} filter={true} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></List>
                <List title="Not completed" todos={todos} filter={false} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></List>
            </div>
        </div>
    );
}
