import { Todo } from '../types/Todo';
import Button from '../components/Button';
import Item from '../components/Item';
import Group from '../components/Group';

type Props = {
    todo: Todo;
    remove: (id: string) => Promise<void>;
    toggle: (id: string) => Promise<void>;
};

export const TodoItem = ({ todo, remove, toggle }: Props) => {
    return (
        <Item>
            <Group>
                <span>{todo?.completed ? `✅` : `❌`}</span>
                <span>{todo?.title}</span>
            </Group>
            <Group>
                <Button onClick={() => toggle(todo.id)}>toggle</Button>
                <Button onClick={() => remove(todo.id)}>remove</Button>
            </Group>
        </Item>
    );
};
