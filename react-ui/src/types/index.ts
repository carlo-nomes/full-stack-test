export type Todo = { id: string; title: string; completed: boolean };
export type NewTodo = { title: string };
export type UpdateTodo = NewTodo & { completed: boolean };

export type Error = { message: string };
