import { NewTodo, Todo } from '../types';
import { QueryClient } from '@tanstack/react-query';

const baseUrlString = import.meta.env.VITE_TODO_API_URL;
const baseTodosUrl = new URL(baseUrlString);
baseTodosUrl.pathname = '/todos';
const baseTodosUrlString = baseTodosUrl.toString();

const getPatchTodoUrl = (id: string) => {
    const url = new URL(baseTodosUrlString);
    url.pathname += `/${id}`;
    return url.toString();
};

const getToggleTodoUrl = (id: string) => {
    const url = new URL(getPatchTodoUrl(id));
    url.pathname += '/toggle';
    return url.toString();
};

export const queryClient = new QueryClient();

export const todosQueryKey = Symbol('todos');

export async function getAllTodos(): Promise<Todo[]> {
    const response = await fetch(baseTodosUrlString);
    return response.json();
}

export async function addTodo({ title }: NewTodo): Promise<Response> {
    try {
        return fetch(baseTodosUrlString, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title }),
        });
    } catch (error) {
        throw error;
    }
}

export async function updateTodo({ id, title, completed }: Todo): Promise<Response> {
    return fetch(getPatchTodoUrl(id), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed }),
    });
}

export async function toggleTodoCompleted(id: string) {
    return fetch(getToggleTodoUrl(id), {
        method: 'PATCH',
    });
}

export async function deleteTodo(id: string): Promise<Response> {
    return fetch(getPatchTodoUrl(id), {
        method: 'DELETE',
    });
}
