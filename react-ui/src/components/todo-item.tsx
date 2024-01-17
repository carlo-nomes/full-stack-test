import { Todo } from '../types';
import { useEffect, useRef, useState } from 'react';
import { Button } from './styled/button';
import styled from 'styled-components';
import { Flex } from './styled/flex';
import { Input } from './styled/input';
import { updateTodo, toggleTodoCompleted, queryClient, todosQueryKey, deleteTodo } from '../api/todos';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getUserFriendlyErrorMessage } from '../utils';

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

export default function TodoItem({ id, title, completed }: Todo) {
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

    function enableEditMode(): void {
        setIsInEditMode(true);
    }

    function disableEditMode(): void {
        setIsInEditMode(false);
    }

    function cancelEditMode(): void {
        disableEditMode();
        setNewTitle(title);
    }

    const updateTodoMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: async () => {
            toast.success('Todo successfully updated.');
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
            disableEditMode();
        },
        onError: (error: unknown): void => {
            toast.error(getUserFriendlyErrorMessage(error));
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
            toast.success('Todo successfully removed.');
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
        onError: (error: unknown): void => {
            toast.error(getUserFriendlyErrorMessage(error));
        },
    });

    async function handleDeleteTodo() {
        await deleteTodoMutation.mutateAsync(id);
    }

    const toggleTodoCompletionMutation = useMutation({
        mutationFn: toggleTodoCompleted,
        onSuccess: async () => {
            toast.success('Todo successfully updated.');
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
        onError: (error: unknown): void => {
            toast.error(getUserFriendlyErrorMessage(error));
        },
    });

    async function handleToggleTodoCompletion(): Promise<void> {
        await toggleTodoCompletionMutation.mutateAsync(id);
    }

    return (
        <RelativeContainer>
            {isInEditMode ? (
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
            ) : (
                <>
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
                </>
            )}
        </RelativeContainer>
    );
}
