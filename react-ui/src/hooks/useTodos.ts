import { useState } from 'react';
import { Todo } from '../types/Todo';

const API_URL = import.meta.env.VITE_API_URL;

export const useTodos = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const get = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/`);
            if (!res.ok) throw res;
            const data = await res.json();
            setTodos(data);
        } catch (error) {
            if (error instanceof Response) {
                setError(`${error.status} ${error.statusText}`);
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
            const res = await fetch(`${API_URL}/${id}/toggle`, { method: 'PATCH' });
            if (!res.ok) throw res;
            const data = await res.json();
            setTodos(todos.map((item) => (item?.id === id ? data : item)));
        } catch (error) {
            if (error instanceof Response) {
                setError(`${error.status} ${error.statusText}`);
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
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw res;
            setTodos([...todos.filter((item) => item?.id !== id)]);
        } catch (error) {
            if (error instanceof Response) {
                setError(`${error.status} ${error.statusText}`);
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
            const res = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            if (!res.ok) throw res;
            const data = await res.json();
            setTodos([...todos, data]);
        } catch (error) {
            if (error instanceof Response) {
                const message = await error.text();
                setError(`${error.status} ${error.statusText} ${message}`);
            } else {
                setError(`${error}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const resetError = () => {
        setError('');
    };

    return { loading, error, todos, remove, add, toggle, get, resetError };
};
