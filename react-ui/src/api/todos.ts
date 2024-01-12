import { baseTodosUrlString } from '../utils';
import { Todo } from '../types';

export const todosQueryKey = Symbol('todos');

export async function getAllTodos(): Promise<Todo[]> {
    const response = await fetch(baseTodosUrlString);
    return response.json();
}

export async function addTodo(title: string): Promise<Todo> {
    const response = await fetch(baseTodosUrlString, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    return response.json();
}
