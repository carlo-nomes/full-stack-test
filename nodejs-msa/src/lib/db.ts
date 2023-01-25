import seed from './seed.json';
import { Todo } from './types';

const FAKE_DATABASE = new Map(seed.map((todo: Todo) => [todo.id, todo]));

export const getItems = async (): Promise<Todo[]> => {
    return Array.from(FAKE_DATABASE.values());
};

export const getItem = async (id: string): Promise<Todo> => {
    const result = await FAKE_DATABASE.get(id);
    if (!result) throw new Error('Item not found');
    return result;
};

export const postItem = async (item: Todo) => {
    const result = await FAKE_DATABASE.set(item.id, item);
    if (!result) throw new Error('Item not found');
    return result;
};

export const putItem = async (item: Todo): Promise<Todo> => {
    const result = await FAKE_DATABASE.set(item.id, item).get(item.id);
    if (!result) throw new Error('Item not found');
    return result;
};

export const deleteItem = async (id: string): Promise<void> => {
    const result = await FAKE_DATABASE.delete(id);
    if (!result) throw new Error('Item not found');
};
