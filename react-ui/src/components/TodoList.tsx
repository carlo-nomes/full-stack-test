import useFetchItems from "../hooks/useFetchItems";
import TodoItem from "./TodoItem";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Todo} from "../types/Todo";

interface TodoListProps {
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[] | null>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    const {data, error, loading} = useFetchItems("http://localhost:3000/todos")
    // const [todos, setTodos] = useState<Todo[] | null>(data);

    useEffect(() => {
        setTodos(data);
    }, [data])

    async function updateItem(id: string, completed: boolean) {
        try {
            const response = await fetch(`http://localhost:3000/todos/${id}/toggle`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({completed: completed})
            });
            if (todos) {
                const todo = await response.json() as Todo;
                const updatedData = todos;
                updatedData[todos?.findIndex(t => t.id === id)!!] = todo;
                setTodos(updatedData);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async function deleteItem(id: string) {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        })
        if (todos) {
            const updatedData = todos.filter(t => t.id !== id);
            setTodos(updatedData);
        }
    }

    if (loading) {
        return <>loading items...</>
    }

    if (error) {
        return <>woops something went wrong while loading the items, we're sorry!</>
    }

    return (
        <ul>
            {todos && (
                todos.map(todo => (<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}
                                             handleDelete={deleteItem} handleUpdate={updateItem}/>))
            )}
        </ul>
    );
};

export default TodoList;