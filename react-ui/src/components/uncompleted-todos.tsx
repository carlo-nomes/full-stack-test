import { ReactElement } from 'react';
import { Todo } from '../types';
import TodoItem from './todo-item';
import { List, ListItem } from './styled/list';

interface UncompletedTodosProps {
    uncompletedTodos: Todo[] | undefined;
}

export default function UncompletedTodos({ uncompletedTodos }: UncompletedTodosProps): ReactElement {
    return (
        <List>
            {uncompletedTodos &&
                uncompletedTodos.map(({ id, title, completed }) => (
                    <ListItem key={id}>
                        <TodoItem id={id} title={title} completed={completed} />
                    </ListItem>
                ))}
        </List>
    );
}
