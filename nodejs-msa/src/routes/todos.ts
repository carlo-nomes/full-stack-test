import Router from 'express-promise-router';

const todoRouter = Router();

// GET /todos
todoRouter.get('/', async (req, res) => {
    throw new Error('GET /todos not implemented');
});

// POST /todos
todoRouter.post('/', async (req, res) => {
    throw new Error('POST /todos not implemented');
});

// PATCH /todos/:id/toggle
todoRouter.patch('/:id/toggle', async (req, res) => {
    throw new Error('PATCH /todos/:id/toggle not implemented');
});

// DELETE /todos/:id
todoRouter.delete('/:id', async (req, res) => {
    throw new Error('DELETE /todos/:id not implemented');
});

export default todoRouter;
