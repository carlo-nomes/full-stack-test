import { baseTodosUrlString, getPatchTodoUrl, getToggleTodoUrl } from '../utils';
import { NewTodo, Todo } from '../types';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const todosQueryKey = Symbol('todos');

export async function getAllTodos(): Promise<Response> {
    return fetch(baseTodosUrlString);
}

export async function addTodo({ title }: NewTodo): Promise<Response> {
    return fetch(baseTodosUrlString, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
}

export async function updateTodo({ id, title, completed }: Todo): Promise<Response> {
    return fetch(getPatchTodoUrl(id), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed }),
    });
}

export async function toggleTodoCompleted(id: string): Promise<Response> {
    return fetch(getToggleTodoUrl(id), {
        method: 'PATCH',
    });
}

export async function deleteTodo(id: string): Promise<Response> {
    return fetch(getPatchTodoUrl(id), {
        method: 'DELETE',
    });
}
