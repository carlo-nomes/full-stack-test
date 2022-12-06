import styled from 'styled-components';

import { Todo } from './types';

import Button from './Button';

const Wrapper = styled.ul`
    list-style: none;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-bottom: 1rem;
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;

    &.completed .title {
        text-decoration: line-through;
    }

    .actions {
        display: flex;
        align-items: center;
    }
`;

type Props = {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};
const List = ({ todos, onToggle, onDelete }: Props) => {
    return (
        <Wrapper>
            {todos.map((todo) => (
                <Item key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <span className="title">{todo.title}</span>
                    <div className="actions">
                        <Button onClick={() => onToggle(todo.id)}>Toggle</Button>
                        <Button className="danger" onClick={() => onDelete(todo.id)}>
                            Delete
                        </Button>
                    </div>
                </Item>
            ))}
        </Wrapper>
    );
};

export default List;
