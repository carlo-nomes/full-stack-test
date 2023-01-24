import { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';
import { Add } from './Add';
import Error from '../components/Error';
import Loading from '../components/Loading';
import List from '../components/List';

export const Todos = () => {
    const { loading, todos, error, get, toggle, remove, add, resetError } = useTodos();

    useEffect(() => {
        get();
    }, []);

    return (
        <div>
            {error && <Error error={error} reset={resetError} />}
            <Loading loading={loading}>
                {todos?.length >= 1 && (
                    <List>
                        {todos.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo} toggle={toggle} remove={remove}></TodoItem>;
                        })}
                    </List>
                )}
            </Loading>
            <Add add={add} />
        </div>
    );
};
