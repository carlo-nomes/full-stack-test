import { v4 as uuidv4 } from 'uuid';
import Router from 'express-promise-router';

import * as dbClient from '../lib/db';

const todoRouter = Router();

todoRouter.get('/', async (req, res) => {
    const items = await dbClient.getItems();
    res.json(items);
});

todoRouter.post('/', async (req, res) => {
    const title = req.body.title;
    const priority = req.body.priority;
    if (typeof title !== 'string') {
        res.status(400).send('Bad request');
        return;
    }

    const item = { id: uuidv4(), title, completed: false, priority: priority };
    const result = await dbClient.putItem(item);

    res.status(201).json(result);
});

todoRouter.patch('/:id/toggle', async (req, res) => {
    try {
        const item = await dbClient.getItem(req.params.id);
        const result = await dbClient.putItem({ ...item, completed: !item.completed });
        res.json(result);
    } catch (err) {
        if (err instanceof Error && err.message === 'Todo not found') res.status(404).send(err.message);
        else throw err;
    }
});

todoRouter.delete('/:id', async (req, res) => {
    try {
        await dbClient.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        if (err instanceof Error && err.message === 'Todo not found') res.status(404).send(err.message);
        else throw err;
    }
});

export default todoRouter;
