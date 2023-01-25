import { v4 as uuidv4 } from 'uuid';
import { getItems, getItem, deleteItem, postItem, putItem } from './../lib/db';
import Router from 'express-promise-router';

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    const items = await getItems();
    res.send(items);
});

todoRouter.get('/:id', async (req, res) => {
    const item = await getItem(req.params.id);
    res.send(item);
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    const id = uuidv4();
    const { title, completed } = req.body;
    if (typeof title !== 'string') {
        res.status(400).send('Bad request');
        return;
    }
    const item = await postItem({ id, title, completed });
    res.send(item);
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, completed } = req.body;
        const item = await putItem({ id, title, completed });
        res.send(item);
    } catch (err) {
        if (err instanceof Error && err.message === 'Item not found') res.status(404).send(err.message);
        else throw err;
    }
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    try {
        const item = await deleteItem(req.params.id);
        res.send(item);
    } catch (err) {
        if (err instanceof Error && err.message === 'Item not found') res.status(404).send(err.message);
        else throw err;
    }
});

export default todoRouter;
