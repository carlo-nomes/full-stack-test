import Router from 'express-promise-router';
import { deleteItem, getItem, getItems, putItem } from '../lib/db';
import { v4 as uuidv4 } from 'uuid';

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    const todos = await getItems();
    res.json(todos);
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: 'Missing title' });
        return;
    }
    const todo = { id: uuidv4(), title, completed: false };
    await putItem(todo);
    res.status(201).json(todo);
});

// PATCH /todos/:id
todoRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const existingTodo = await getItem(id);
    if (!existingTodo) {
        res.status(400).json({ message: `Todo ${id} not found` });
        return;
    }

    const { title, completed } = req.body;
    const newTodo = { id, title, completed };
    await putItem(newTodo);
    res.status(200).end();
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    const { id } = req.params;
    const existingTodo = await getItem(id);
    if (!existingTodo) {
        res.status(400).json({ message: `Todo ${id} not found` });
        return;
    }

    const newTodo = { ...existingTodo, completed: !existingTodo.completed };
    await putItem(newTodo);
    res.status(200).end();
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const existingTodo = await getItem(id);
    if (!existingTodo) {
        res.status(400).json({ message: `Todo ${id} not found` });
        return;
    }

    await deleteItem(id);
    res.status(204).end();
});

export default todoRouter;
