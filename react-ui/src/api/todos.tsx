import { Todo } from './../types';

export const getTodos = async () => {
    const result = await fetch(`http://localhost:3000/todos`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
    return result;
};

export const getTodo = async (id: string) => {
    const result = await fetch(`http://localhost:3000/todos/${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
    return result;
};

export const addTodo = async (title: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, completed: false }),
    };
    const result = await fetch(`http://localhost:3000/todos`, requestOptions);
    return result;
};

export const deleteTodo = async (id: string) => {
    await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
};

export const updateTodo = async (item: Todo) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: item.title, completed: item.completed }),
    };
    await fetch(`http://localhost:3000/todos/${item.id}/toggle`, requestOptions);
};
