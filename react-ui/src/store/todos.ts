import { Todo } from '../types';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const TodosContext = createContext<{
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
} | null>(null);
