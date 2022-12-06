import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import todoRoutes from './routes/todos';

const PORT = 3000;

const app = express();

// Express configuration
app.set('port', PORT);

// Express middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// Express routes
app.use('/todos', todoRoutes);

// Express error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json('Internal server error');
});

// Start express server
app.listen(app.get('port'), () => {
    console.log(`App is running at http://localhost:${app.get('port')}`);
});
