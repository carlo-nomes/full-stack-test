import seed from './seed.json';
import { Todo } from './types';

const FAKE_DATABASE = new Map(seed.map((todo: Todo) => [todo.id, todo]));

const FAKE_DELAY_MS = 300;
const randomDelay = async () => new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_MS));

export const getItems = async (): Promise<Todo[]> => {
    await randomDelay();
    return Array.from(FAKE_DATABASE.values());
};

export const getItem = async (id: string): Promise<Todo> => {
    await randomDelay();
    const result = FAKE_DATABASE.get(id);
    if (!result) throw new Error('Item not found');
    return result;
};

export const putItem = async (item: Todo): Promise<Todo> => {
    await randomDelay();
    const result = FAKE_DATABASE.set(item.id, item).get(item.id);
    if (!result) throw new Error('Item not found');
    return result;
};

export const deleteItem = async (id: string): Promise<void> => {
    await randomDelay();
    const result = FAKE_DATABASE.delete(id);
    if (!result) throw new Error('Item not found');
};
