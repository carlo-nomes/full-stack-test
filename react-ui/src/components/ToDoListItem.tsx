import styled from 'styled-components';
import { useState } from 'react';
import { Button, Checkbox } from './FormComponents';

interface IToDoListItem {
    id: string;
    title: string;
    completed: boolean;
    onChecked: (id: string) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 5px;
    align-items: center;
`;

const ToDoListItem = ({ id, title, completed, onChecked, onDelete }: IToDoListItem) => {
    const [checked, setChecked] = useState(completed);

    const handleToggle = () => {
        setChecked(!checked);
        onChecked(id);
    };

    const handleClick = () => {
        onDelete(id);
    };

    return (
        <Wrapper>
            <div>{title}</div>
            <Checkbox checked={checked} onChange={handleToggle} />
            <Button onClick={handleClick}>Delete</Button>
        </Wrapper>
    );
};

export default ToDoListItem;
