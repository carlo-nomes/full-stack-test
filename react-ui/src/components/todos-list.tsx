import { ReactElement } from 'react';
import { Todo } from '../types';
import TodoItem from './todo-item';
import Loading from './loading';
import { List, ListItem } from './styled/list';
import { H3 } from './styled/heading';

interface UncompletedTodosProps {
    todos?: Todo[];
    loading: boolean;
    emptyMessage?: string;
}

export default function TodosList({ todos, loading, emptyMessage = 'Time to get things done!' }: UncompletedTodosProps): ReactElement {
    const hasTodos = todos && todos.length > 0;

    return loading ? (
        <Loading />
    ) : hasTodos ? (
        <List>
            {todos &&
                todos.map(({ id, title, completed }) => (
                    <ListItem key={id}>
                        <TodoItem id={id} title={title} completed={completed} />
                    </ListItem>
                ))}
        </List>
    ) : (
        <H3>{emptyMessage}</H3>
    );
}
