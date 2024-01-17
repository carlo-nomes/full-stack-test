import { useState } from 'react';
import { Todo } from './types/todo';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

function useTodos() {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([]);

    async function getAllTodos() {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos`);
            const data = await response.json();
            setTodos(data);
        } catch (error: unknown) {
            toast.error('Something went wrong.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    async function addTodo(title: string, priority: string) {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, priority }),
            });
            const data = await response.json();
            setTodos([...todos, data]);
        } catch (error: unknown) {
            toast.error('Something went wrong.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const deleteTodo = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw response;
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error: unknown) {
            toast.error('Something went wrong.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const toggleTodo = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/todos/${id}/toggle`, {
                method: 'PATCH',
            });
            if (!response.ok) throw response;
            const data = await response.json();
            setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
        } catch (error: unknown) {
            toast.error('Something went wrong.');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return [todos, { getAllTodos, addTodo, deleteTodo, toggleTodo }, { loading }] as const;
}

export default useTodos;
