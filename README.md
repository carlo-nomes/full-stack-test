# Full-stack TypeScript test

This is a simple setup for a full-stack TypeScript Todo app. Please first read this document in its entirety before starting the exercise.

The goal of the exercise is to create a fully functional Todo app with the following features:

- Display a list of todos from a database
- Add a new todo
- Toggle the "completed" status of a todo
- Delete a todo

## Prerequisites

The following tools are required to get started:

- An IDE of your choice (e.g. VS Code)
- Git
- Node.js 24 (LTS) or higher, with the npm version that comes with it. If you use `nvm`, run `nvm use` in the root of the repository.

## Getting started

### Forking the repository

- Fork this repository into your own GitHub account
- Clone your fork (e.g. `git clone https://github.com/<your-username>/full-stack-test.git`)
- Create a new branch with your name (e.g. `git checkout -b carlo-nomes`)

### Installing dependencies

- Install the backend dependencies by navigating to the `nodejs-msa` folder and running `npm install`
- Install the frontend dependencies by navigating to the `react-ui` folder and running `npm install`

### Starting the app

- Start the backend with `npm run dev` in the `nodejs-msa` folder
- Start the frontend in a new terminal session with `npm run dev` in the `react-ui` folder

### Coding exercise

- Start finishing the frontend and backend code as described below
- Commit your changes and push them to your forked repository

  > Before committing, run `npm run prettier` and `npm run typecheck` in both the `nodejs-msa` and `react-ui` folders. The dev servers do not report type errors, so `typecheck` is the way to check your typing.

- Add a short `NOTES.md` to the root of the repository with the choices you made, anything you skipped or would do differently with more time, and any questions you have. A few bullet points are enough. We use your submission and these notes as the starting point of the interview.

### Finishing up

- When you are done, create a pull request to merge your forked branch into the `main` branch of the original repository

## Backend

All backend code is located in the `nodejs-msa` folder. The backend is partially implemented, using `express` (v5) and `cors`. Express 5 passes errors thrown in `async` route handlers to the error handler in `src/index.ts`, so no extra wrapper is needed. The following endpoints are already available in `src/routes/todos.ts`:

- `GET /todos`
- `POST /todos`
- `PATCH /todos/:id/toggle`
- `DELETE /todos/:id`

The backend server is configured by default to run on `http://localhost:3000`. This can be changed in `src/index.ts` if preferred.

A fake database implementation is available through `src/lib/db.ts`. It exposes the following functions, which can be used to interact with the data:

- `getItems` - returns all items in the database
- `getItem` - returns a single item by ID / throws a `NotFoundError` if the item does not exist
- `putItem` - adds or updates an item in the database and returns the updated item
- `deleteItem` - deletes an item from the database / throws a `NotFoundError` if the item does not exist

Every call takes a random 200 to 600 ms, like a real database. Items are returned as copies, so changes to an item are only saved when you call `putItem`.

A Todo item is defined as follows:

```typescript
type Todo = { id: string; title: string; completed: boolean };
```

### Requirements

Finish the endpoints in `src/routes/todos.ts`. The following requirements must be met:

- Add safeguards to the endpoints as needed. And return the appropriate HTTP status codes.
- Use `async/await` to handle asynchronous operations.
- Use unique IDs for new Todos. (`crypto.randomUUID()` is built into Node.js)
- Make sure typing is done correctly.

### Notes

- The project is set up with `tsx watch`, which automatically restarts the server when it detects changes to the code.
- The **data is not persistent**. It will be reset every time the server is restarted.

## Frontend

All frontend code is located in the `react-ui` folder, it is partially set up using `vite`, `react` (v19), `react-dom` and `styled-components`. The entry point for the coding exercise is `src/App.tsx`.

A minimal CSS reset is set up in `src/GlobalStyles.tsx`, no additional styling is included. Styling can be kept minimal, and you can use `styled-components` (included) or any other method.

### Simple styled component example:

```tsx
// src/App.tsx
import styled from "styled-components";

const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const App = () => {
  return <Button>Click me</Button>;
};

export default App;
```

### Requirements

Finish the frontend code, the following requirements must be met:

- Use hooks and functional components as much as possible.
- When possible, use `async/await` to handle asynchronous operations.
- Make a conscious decision when to split components into smaller components and separate files.
- When relevant, make custom hooks.
- Make sure typing is done correctly.

### Notes

- The project is set up with `vite` which will automatically reload the browser when you make changes to the code.
- A setup for a `.env` file is included. But the file is ignored through the `.gitignore`.

You can create the `.env` file and add the following line to set the API URL as an environment variable if you like:

```bash
VITE_API_URL=http://localhost:3000
```

## Resources

Here are some resources that might be useful, but are not required to complete the exercise.

- General
  - [Git](https://git-scm.com/doc) / [GitHub](https://docs.github.com/en)
  - [VS Code](https://code.visualstudio.com/docs)
- Language
  - [TypeScript](https://www.typescriptlang.org/docs/)
  - [Node.js](https://nodejs.org/en/docs/)
  - [npm](https://docs.npmjs.com/)
- Frontend
  - [React](https://react.dev/learn)
  - [styled-components](https://styled-components.com/docs)
- Backend
  - [Express](https://expressjs.com/en/5x/api.html)
  - [crypto.randomUUID()](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions)
- Tooling
  - [Prettier](https://prettier.io/docs/en/index.html)
  - [Vite](https://vite.dev/guide/)
  - [tsx](https://tsx.is/)

## Final notes

Please do not spend more than about 2 to 3 hours on this exercise. We are more interested in seeing how you approach the problem and how you structure your code. If you are not able to finish everything, that is fine: write down in `NOTES.md` what is left and how you would approach it.

Feel free to approach the exercise in any way you like. If your preferred way of doing things is not mentioned in the requirements, you may still apply it. All dependencies are already included in the project. You do not need to install any additional dependencies, but if you want to, you are free to do so.

Any resources you like (e.g. documentation, search engines, AI assistants) are allowed, and other solutions are publicly visible. Nothing is stopping you from looking at other solutions. But please **do not simply copy/paste code** from elsewhere. We want to see your own code, and we will talk through it together, so make sure you can explain every part of it.

If you have any questions or are stuck, do not hesitate to ask us. Furthermore, any feedback on the exercise itself is very welcome, we are always looking to improve our process.

**Thanks for your time and good luck!**
