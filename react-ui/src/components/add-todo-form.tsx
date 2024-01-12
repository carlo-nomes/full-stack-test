import { Button } from './styled/button';
import { Input } from './styled/input';
import { baseTodosUrlString } from '../utils';
import { FormEvent, ReactElement, useRef } from 'react';
import { Flex } from './styled/flex';

export default function AddTodoForm(): ReactElement {
    const formRef = useRef<HTMLFormElement>(null);
    async function sendAddTodoRequest(event: FormEvent<HTMLFormElement>): Promise<void> {
        try {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const todoTitle = formData.get('title');
            const todo = {
                title: todoTitle,
            };

            await fetch(baseTodosUrlString, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });

            formRef.current?.reset();
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
