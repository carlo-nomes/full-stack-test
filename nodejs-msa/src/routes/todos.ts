import { Todo } from './../lib/types';
import Router from 'express-promise-router';
import * as db from '../lib/db';
import { v4 as uuidv4 } from 'uuid';

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    const items = await db.getItems();
    return res.json(items);
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    const title = req.body.title;
    if (typeof title !== 'string' || title === '') {
        res.status(400).send('Please enter a title');
        return;
    }
    const item: Todo = { id: uuidv4(), title: title, completed: false };
    const savedItem = await db.putItem(item);
    res.status(201).json(savedItem);
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    try {
        const item = await db.getItem(req.params.id);
        const updatedItem = await db.putItem({ ...item, completed: !item.completed });
        res.json(updatedItem);
    } catch (error) {
        if (error instanceof Error && error.message === 'Item not found') {
            res.status(404).send(error.message);
        } else {
            throw error;
        }
    }
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    try {
        await db.deleteItem(req.params.id);
        res.send();
    } catch (error) {
        if (error instanceof Error && error.message === 'Item not found') {
            res.status(404).send(error.message);
        } else {
            throw error;
        }
    }
});

export default todoRouter;
