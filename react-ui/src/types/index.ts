export type Todo = { id: string; title: string; completed: boolean };
export type NewTodo = { title: string; completed: boolean };
export type UpdateTodo = NewTodo;

export type Error = { message: string };
