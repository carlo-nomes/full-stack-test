import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos, addTodo, deleteTodo, getTodo, updateTodo } from './api/todos';
import Card from './components/Card';
import Inputfield from './components/inputfield';
import { Todo } from './types';

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [newTask, setNewTask] = useState<string>('');
    const fetchTodos = () => getTodos().then((data) => setTodos(data));

    useEffect(() => {
        fetchTodos();
    }, []);

    const getItem = async (id: string) => {
        await getTodo(id);
        fetchTodos();
    };

    const addItem = async (title: string) => {
        await addTodo(title);
        setNewTask('');
        fetchTodos();
    };

    const updateItem = async (todo: Todo) => {
        await updateTodo(todo);
        fetchTodos();
    };

    const deleteItem = async (id: string) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <StyledPage>
            <Card>
                <StyledLayout>
                    <StyledInputContainer>
                        <Inputfield
                            onEnter={() => addItem(newTask)}
                            placeholder="write a task..."
                            value={newTask}
                            handleChange={(task) => setNewTask(task)}
                        />
                        <StyledButton
                            disabled={!newTask}
                            onClick={() => {
                                addItem(newTask);
                            }}
                        >
                            Add task
                        </StyledButton>
                    </StyledInputContainer>
                    <StyledTodoList>
                        {todos.map((todo) => (
                            <StyledTodoRow key={todo.id}>
                                <StyledTodoTask>
                                    <button onClick={() => deleteItem(todo.id)}>x</button>
                                    <div>{todo.title}</div>
                                </StyledTodoTask>
                                <input
                                    checked={todo.completed}
                                    onChange={() => updateItem({ id: todo.id, title: todo.title, completed: !todo.completed })}
                                    type="checkbox"
                                />
                            </StyledTodoRow>
                        ))}
                    </StyledTodoList>
                </StyledLayout>
            </Card>
        </StyledPage>
    );
};

export default App;

const StyledPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eafcfe;
    font-family: Arial;
`;

const StyledLayout = styled.div`
    display: grid;
    gap: 24px;
`;

const StyledInputContainer = styled.div`
    display: flex;
    gap: 8px;
`;

const StyledButton = styled.button`
    white-space: nowrap;
    text-align: center;
`;

const StyledTodoList = styled.div`
    display: grid;
    gap: 8px;
`;

const StyledTodoRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledTodoTask = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;
