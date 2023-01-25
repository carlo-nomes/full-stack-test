import styled from "styled-components";
import TodoList from "./components/TodoList";
import AddItemForm from "./components/AddItemForm";
import {useRef, useState} from "react";
import {Todo} from "./types/Todo";
import useFetchItems from "./hooks/useFetchItems";

const AppContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
`;

const App = () => {
    const {data, error, loading} = useFetchItems("http://localhost:3000/todos")
    const titleRef = useRef<HTMLInputElement>(null);
    const [addTodoError, setAddTodoError] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[] | null>(null);

    const addTodo = async () => {
        setAddTodoError(false);
        try {
            await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title: titleRef.current?.value})
            })
        } catch (error) {
            setAddTodoError(true);
        }
    }

    return (
        <AppContainer>
            <div style={{textAlign: 'center'}}>
                <h1>TODOS:</h1>
                {todos && (<TodoList todos={todos} setTodos={setTodos}/>)}
            </div>
            <div>
                <h1>Add a new Todo</h1>
                {addTodoError && <div>Something went wrong while adding a new todo item.</div>}
                <AddItemForm titleRef={titleRef} handleAddTodo={addTodo}/>
            </div>
        </AppContainer>);
};

export default App;
