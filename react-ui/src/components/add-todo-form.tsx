import { Button } from './styled/button';
import { Form } from './styled/form';
import { Input } from './styled/input';

export default function AddTodoForm() {
    const sendAddTodoRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const todoTitle = formData.get('title');
        const todo = {
            title: todoTitle,
            completed: false,
        };
    };

    return (
        <Form onSubmit={sendAddTodoRequest}>
            <Input name="title" type="text" placeholder="Describe your task" />
            <Button type={'submit'}>Add</Button>
        </Form>
    );
}
