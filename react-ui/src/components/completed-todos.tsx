import { ReactElement } from 'react';
import { List, ListItem } from './styled/list';
import { Todo } from '../types';
import TodoItem from './todo-item';

interface CompletedTodosProps {
    completedTodos: Todo[] | undefined;
}

export default function CompletedTodos({ completedTodos }: CompletedTodosProps): ReactElement {
    return (
        <List>
            {completedTodos &&
                completedTodos.map(({ id, title, completed }) => (
                    <ListItem key={id}>
                        <TodoItem id={id} title={title} completed={completed} />
                    </ListItem>
                ))}
        </List>
    );
}
