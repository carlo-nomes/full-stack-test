import { useEffect, useState } from 'react';
import { Todo } from '../types';
import TodoItem from './todo-item';

export default function TodosList() {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: '1',
            title: 'Do the dishes',
            completed: false,
        },
        {
            id: '2',
            title: 'Wash my car',
            completed: false,
        },
    ]);

    useEffect(() => {
        // Fetch todos
    }, []);

    return (
        <>
            {todos.map(({ id, title, completed }) => (
                <TodoItem key={id} id={id} title={title} completed={completed} />
            ))}
        </>
    );
}
