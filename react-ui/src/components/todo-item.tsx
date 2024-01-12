import { Todo, UpdateTodo } from '../types';
import { useEffect, useRef, useState } from 'react';
import { Input } from './styled/input';
import { Button } from './styled/button';
import { getPatchTodoUrl, getToggleTodoUrl } from '../utils';
import styled from 'styled-components';
import { Flex } from './styled/flex';

const SaveEditedTodoButton = styled(Button)`
    position: absolute;
    right: 0.65rem;
    top: 0.65rem;
`;

export const ToggleEditTodoButton = styled(Button)`
    cursor: url('/edit.svg'), pointer;
    padding: 1rem;
    font-weight: 400;
    position: relative;
`;

const RelativeContainer = styled.div`
    position: relative;
`;

const ManipulateTodoContainer = styled(Flex)`
    position: absolute;
    right: 0.65rem;
    top: 0.65rem;
`;

export default function TodoItem(props: Todo) {
    const { id, title, completed } = props;

    const [newTitle, setNewTitle] = useState(title);
    const [isInEditMode, setIsInEditMode] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isInEditMode) {
            inputRef.current?.focus();
        }
    }, [isInEditMode]);

    function updateTitle(event: React.FormEvent<HTMLInputElement>) {
        setNewTitle(event.currentTarget.value);
    }

    function toggleIsInEditMode() {
        setIsInEditMode((isInEditMode) => !isInEditMode);
    }

    function stopPropagation(event: React.MouseEvent) {
        event.stopPropagation();
    }

    async function updateTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const todo: UpdateTodo = {
            title: newTitle,
            completed,
        };

        await fetch(getPatchTodoUrl(id), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        setIsInEditMode(false);
    }

    async function markTodoAsCompleted() {
        await fetch(getToggleTodoUrl(id), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return isInEditMode ? (
        <RelativeContainer as="form" onSubmit={updateTodo}>
            <Input $fullWidth ref={inputRef} value={newTitle} onInput={updateTitle} onClick={stopPropagation} onBlur={toggleIsInEditMode} />
            <SaveEditedTodoButton $appearance="primary" $size="small" type="submit">
                Save
            </SaveEditedTodoButton>
        </RelativeContainer>
    ) : (
        <RelativeContainer>
            <ToggleEditTodoButton $appearance="secondary" $fullWidth onClick={toggleIsInEditMode}>
                {title}
            </ToggleEditTodoButton>
            <ManipulateTodoContainer $direction="row" $gap={8}>
                <Button $appearance="secondary" $size="small">
                    Remove
                </Button>
                <Button $appearance="primary" $size="small" onClick={markTodoAsCompleted}>
                    Complete
                </Button>
            </ManipulateTodoContainer>
        </RelativeContainer>
    );
}
