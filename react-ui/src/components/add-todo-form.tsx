import { Button } from './styled/button';
import { Input } from './styled/input';
import { baseTodosUrlString } from '../utils';
import { FormEvent, ReactElement, useRef } from 'react';
import { Flex } from './styled/flex';
import { useMutation } from '@tanstack/react-query';
import { addTodo, queryClient, todosQueryKey } from '../api/todos';
import { NewTodo } from '../types';

export default function AddTodoForm(): ReactElement {
    const formRef = useRef<HTMLFormElement>(null);
    const addTodoMutation = useMutation({
        mutationFn: addTodo,
        onSuccess: async () => {
            formRef.current?.reset();
            await queryClient.invalidateQueries({ queryKey: [todosQueryKey] });
        },
    });

    async function sendAddTodoRequest(event: FormEvent<HTMLFormElement>): Promise<void> {
        try {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            const todoTitle = formData.get('title') as string;
            const newTodo: NewTodo = {
                title: todoTitle,
            };

            await addTodoMutation.mutateAsync(newTodo);
        } catch (e) {
            console.error(e);
        }
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
