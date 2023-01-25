import { useState, useEffect } from 'react';
import { Todo } from '../types';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const useTodos = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${VITE_API_URL}/todos`);
            if (!response.ok) throw response;
            const data = await response.json();
            setTodos(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = async (title: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${VITE_API_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            if (!response.ok) throw response;
            const data = await response.json();
            setTodos([...todos, data]);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteTodo = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${VITE_API_URL}/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw response;
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const toggleTodo = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${VITE_API_URL}/todos/${id}/toggle`, {
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

    return {
        addTodo,
        deleteTodo,
        toggleTodo,
        todos,
        loading,
        error,
    };
};

export default useTodos;
