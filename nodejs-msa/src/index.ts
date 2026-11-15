import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import todoRoutes from './routes/todos';

const PORT = 3000;

const app = express();

// Express middleware
app.use(express.json());
app.use(cors());

// Express routes
app.use('/todos', todoRoutes);

// Express error handler
// Express 5 forwards errors thrown in async route handlers to this handler.
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// Start express server
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
