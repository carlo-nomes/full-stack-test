import { ReactElement } from 'react';
import { Todo } from '../types';
import TodoItem from './todo-item';
import Loading from './loading';
import { List, ListItem } from './styled/list';

interface UncompletedTodosProps {
    todos: Todo[] | undefined;
    loading: boolean;
}

export default function TodosList({ todos, loading }: UncompletedTodosProps): ReactElement {
    return loading ? (
        <Loading />
    ) : (
        <List>
            {todos &&
                todos.map(({ id, title, completed }) => (
                    <ListItem key={id}>
                        <TodoItem id={id} title={title} completed={completed} />
                    </ListItem>
                ))}
        </List>
    );
}
