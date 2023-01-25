import styled from 'styled-components';
import { useState } from 'react';

const ItemContainer = styled.li`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem;
`;

interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    handleDelete: (id: string) => void;
    handleUpdate: (id: string, completed: boolean) => void;
}

const TodoItem = ({ id, title, completed, handleDelete, handleUpdate }: TodoItemProps) => {
    const deleteItem = async () => {};

    return (
        <ItemContainer>
            <button onClick={() => handleDelete(id)}>delete</button>
            <span>{title}</span>
            <input type="checkbox" defaultChecked={completed} onChange={(e) => handleUpdate(id, e.target.checked)} />
        </ItemContainer>
    );
};

export default TodoItem;
