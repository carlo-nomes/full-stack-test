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

export { baseTodosUrl, baseTodosUrlString, getPatchTodoUrl, getToggleTodoUrl };
