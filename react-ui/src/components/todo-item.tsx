import { Todo } from '../types';
import { useEffect, useRef, useState } from 'react';
import { Button } from './styled/button';
import styled from 'styled-components';
import { Flex } from './styled/flex';
import { updateTodo, toggleTodoCompleted, queryClient, todosQueryKey, deleteTodo } from '../api/todos';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { Input } from './styled/input';

export const ToggleEditTodoButton = styled(Button)`
    cursor: url('/edit.svg'), pointer;
    padding: 1rem;
    font-weight: 400;
    position: relative;
`;

const RelativeContainer = styled.div`
    position: relative;
`;

const AbsoluteButtonContainer = styled(Flex)`
    position: absolute;
    right: 0.65rem;
    top: 0.65rem;
`;

export default function TodoItem({ completed, id, title }: Todo) {
    const [isInEditMode, setIsInEditMode] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [newTitle, setNewTitle] = useState(title);

    useEffect(() => {
        if (isInEditMode) {
            inputRef.current?.focus();
        }
    }, [isInEditMode]);

    function updateTitle(event: React.FormEvent<HTMLInputElement>) {
        setNewTitle(event.currentTarget.value);
    }

    function enableEditMode() {
        setIsInEditMode(true);
    }

    function cancelEditMode() {
        setIsInEditMode(false);
        setNewTitle(title);
    }

    const updateTodoMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
            cancelEditMode();
        },
    });

    async function handleUpdateTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const updatedTodo: Todo = {
            id,
            title: newTitle,
            completed,
        };

        await updateTodoMutation.mutateAsync(updatedTodo);
    }

    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
    });

    async function handleDeleteTodo() {
        await deleteTodoMutation.mutateAsync(id);
    }

    const toggleTodoCompletionMutation = useMutation({
        mutationFn: toggleTodoCompleted,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
    });

    async function handleToggleTodoCompletion(): Promise<void> {
        await toggleTodoCompletionMutation.mutateAsync(id);
    }

    return isInEditMode ? (
        <RelativeContainer>
            <form onSubmit={handleUpdateTodo}>
                <Input $fullWidth ref={inputRef} value={newTitle} onInput={updateTitle} />
                <AbsoluteButtonContainer $direction="row" $gap={8}>
                    <Button $appearance="secondary" $size="small" type="button" onClick={cancelEditMode}>
                        Cancel
                    </Button>
                    <Button $appearance="primary" $size="small" type="submit">
                        Save
                    </Button>
                </AbsoluteButtonContainer>
            </form>
        </RelativeContainer>
    ) : (
        <RelativeContainer>
            <ToggleEditTodoButton $appearance="secondary" $fullWidth onClick={enableEditMode}>
                {title}
            </ToggleEditTodoButton>
            <AbsoluteButtonContainer $direction="row" $gap={8}>
                <Button $appearance="secondary" $size="small" onClick={handleDeleteTodo}>
                    Remove
                </Button>
                <Button $appearance="primary" $size="small" onClick={handleToggleTodoCompletion}>
                    {completed ? 'Undo' : 'Complete'}
                </Button>
            </AbsoluteButtonContainer>
        </RelativeContainer>
    );
}
