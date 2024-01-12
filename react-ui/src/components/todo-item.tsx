import { Todo, UpdateTodo } from '../types';
import { useEffect, useRef, useState } from 'react';
import { Button } from './styled/button';
import styled from 'styled-components';
import { Flex } from './styled/flex';
import { patchTodo, toggleTodoCompleted, queryClient, todosQueryKey } from '../api/todos';
import { useMutation } from '@tanstack/react-query';
import { Input } from './styled/input';

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

    const patchTodoMutation = useMutation({
        mutationFn: patchTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
            setIsInEditMode(false);
        },
    });

    async function updateTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const updatedTodo: Todo = {
            id,
            title: newTitle,
            completed,
        };

        await patchTodoMutation.mutateAsync(updatedTodo);
    }

    const toggleTodoMutation = useMutation({
        mutationFn: toggleTodoCompleted,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
    });

    async function markTodoAsCompleted() {
        await toggleTodoMutation.mutateAsync(id);
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
