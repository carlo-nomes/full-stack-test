import { baseTodosUrlString } from '../utils';
import { NewTodo, Todo } from '../types';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const todosQueryKey = Symbol('todos');

export async function getAllTodos(): Promise<Todo[]> {
    const response = await fetch(baseTodosUrlString);
    return response.json();
}

export async function addTodo({ title }: NewTodo): Promise<Todo> {
    const response = await fetch(baseTodosUrlString, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    return response.json();
}
