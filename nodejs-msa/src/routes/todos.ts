import Router from 'express-promise-router';
import {deleteItem, getItem, getItems, putItem} from "../lib/db";
import {v4 as uuid, validate} from "uuid";
import {validateCompletedProperty, validateTitleProperty} from "../util";

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    const items = await getItems();
    res.send(items);
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    const {title} = req.body;

    validateTitleProperty(title);

    try {
        const result = await putItem({id: uuid(), title, completed: false});
        res.status(201).send(result);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "Item not found") {
                res.status(404).send({message: error.message});
            }
            res.status(400).send({message: error.message});
        }
    }
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    const {id} = req.params;
    if (!validate(id)) {
        res.status(400).send({message: "Incorrect item id."});
    }

    const { completed } = req.body;
    validateCompletedProperty(completed);

    try {
        const item = await getItem(req.params.id);
        item.completed = req.body;
        const result = await putItem(item);
        res.send(result);
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "Item not found") {
                res.status(404).send({message: error.message});
            }
            res.status(400).send({message: error.message});
        }
    }
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!validate(id)) {
            res.status(400).send({message: "Incorrect item id."})
        }

        await deleteItem(id);
        res.send({"message": `Deleted todo item with id ${id}`});
    } catch (error) {
        if (error instanceof Error) {
            res.status(404);
            res.send({message: error.message});
        }
    }
});

export default todoRouter;
