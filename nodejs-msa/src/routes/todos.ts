import Router from 'express-promise-router';
import { v4 as uuidv4 } from 'uuid';
import * as dbClient from '../lib/db';

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    try {
        const todos = await dbClient.getItems();
        res.json(todos);
    } catch (error) {
        throw error;
    }
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    try {
        const title = req.body.title;
        if (typeof title !== 'string') {
            res.status(400).send('Bad request');
            return;
        }
        const todo = { id: uuidv4(), title, completed: false };
        const result = await dbClient.putItem(todo);

        res.status(201).json(result);
    } catch (error) {
        throw error;
    }
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    try {
        const todo = await dbClient.getItem(req.params.id);
        const result = await dbClient.putItem({ ...todo, completed: !todo.completed });
        res.json(result);
    } catch (error) {
        throw error;
    }
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    try {
        await dbClient.deleteItem(req.params.id);
        res.status(204).send();
    } catch (error) {
        throw error;
    }
});

export default todoRouter;
