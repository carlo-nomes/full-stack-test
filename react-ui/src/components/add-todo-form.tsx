import { Button } from './styled/button';
import { Input } from './styled/input';
import { FormEvent, ReactElement, useRef } from 'react';
import { Flex } from './styled/flex';
import { useMutation } from '@tanstack/react-query';
import { addTodo, queryClient, todosQueryKey } from '../api/todos';
import { NewTodo } from '../types';
import toast from 'react-hot-toast';
import { getUserFriendlyErrorMessage } from '../utils';

export default function AddTodoForm(): ReactElement {
    const formRef = useRef<HTMLFormElement>(null);

    const addTodoMutation = useMutation({
        mutationFn: addTodo,
        onSuccess: async (): Promise<void> => {
            formRef.current?.reset();
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
            toast.success('Todo added');
        },
        onError: (error: unknown): void => {
            toast.error(getUserFriendlyErrorMessage(error));
        },
    });

    async function sendAddTodoRequest(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const todoTitle = formData.get('title') as string;
        const newTodo: NewTodo = {
            title: todoTitle,
        };

        await addTodoMutation.mutateAsync(newTodo);
    }

    return (
        <Flex $direction="row" $gap={8} as="form" ref={formRef} onSubmit={sendAddTodoRequest}>
            <Input $fullWidth name="title" type="text" placeholder="What else needs to be done?" />
            <Button $appearance="primary" type="submit">
                Add
            </Button>
        </Flex>
    );
}
