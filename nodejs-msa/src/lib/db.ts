import seed from './seed.json';
import type { Todo } from './types';

export class NotFoundError extends Error {
    constructor(id: string) {
        super(`Item with id "${id}" not found`);
        this.name = 'NotFoundError';
    }
}

const FAKE_DATABASE = new Map<string, Todo>(seed.map((todo: Todo) => [todo.id, todo]));

// Every call takes between 200 and 600 ms, like a real database over the network.
const MIN_DELAY_MS = 200;
const MAX_DELAY_MS = 600;
const randomDelay = () => new Promise((resolve) => setTimeout(resolve, MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS)));

// Items are copied in and out, so changing a returned item does not change the database.
const copy = (item: Todo): Todo => ({ ...item });

export const getItems = async (): Promise<Todo[]> => {
    await randomDelay();
    return Array.from(FAKE_DATABASE.values(), copy);
};

export const getItem = async (id: string): Promise<Todo> => {
    await randomDelay();
    const result = FAKE_DATABASE.get(id);
    if (!result) throw new NotFoundError(id);
    return copy(result);
};

export const putItem = async (item: Todo): Promise<Todo> => {
    await randomDelay();
    FAKE_DATABASE.set(item.id, copy(item));
    return copy(item);
};

export const deleteItem = async (id: string): Promise<void> => {
    await randomDelay();
    const deleted = FAKE_DATABASE.delete(id);
    if (!deleted) throw new NotFoundError(id);
};
