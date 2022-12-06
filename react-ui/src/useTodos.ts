import { useState } from 'react';

import { Todo } from './types';

const API_URL = import.meta.env.VITE_API_URL;

const useTodos = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const getAll = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos`);
            if (!response.ok) throw response;

            const data = await response.json();
            setTodos(data);
        } catch (error: unknown) {
            if (error instanceof Response) {
                setError(`${error.status}: ${error.statusText}`);
            } else {
                setError(`${error}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const add = async (title: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            if (!response.ok) throw response;

            const data = await response.json();
            setTodos([...todos, data]);
        } catch (error: unknown) {
            if (error instanceof Response) {
                setError(`${error.status}: ${error.statusText}`);
            } else {
                setError(`${error}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const remove = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw response;

            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error: unknown) {
            if (error instanceof Response) {
                setError(`${error.status}: ${error.statusText}`);
            } else {
                setError(`${error}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const toggle = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos/${id}/toggle`, {
                method: 'PATCH',
            });
            if (!response.ok) throw response;

            const data = await response.json();
            setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
        } catch (error: unknown) {
            if (error instanceof Response) {
                setError(`${error.status}: ${error.statusText}`);
            } else {
                setError(`${error}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return [todos, { getAll, add, remove, toggle }, { loading, error }] as const;
};

export default useTodos;
