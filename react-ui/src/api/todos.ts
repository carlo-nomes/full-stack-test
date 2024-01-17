import { NewTodo, Todo } from '../types';
import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

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
    const response = await axios.get(baseTodosUrlString);
    return response.data;
}

export async function addTodo({ title }: NewTodo): Promise<Response> {
    return axios.post(baseTodosUrlString, { title });
}

export async function updateTodo({ id, title, completed }: Todo): Promise<Response> {
    return axios.patch(getPatchTodoUrl(id), { title, completed });
}

export async function toggleTodoCompleted(id: string): Promise<Response> {
    return axios.patch(getToggleTodoUrl(id));
}

export async function deleteTodo(id: string): Promise<Response> {
    return axios.delete(getPatchTodoUrl(id));
}
