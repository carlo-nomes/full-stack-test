import Title from '../components/Title';
import Button from '../components/Button';
import Label from '../components/Label';
import Form from '../components/Form';
import Container from '../components/Container';

type Props = {
    add: (title: string) => Promise<void>;
};

export const Add = ({ add }: Props) => {
    return (
        <Container>
            <Title>Add a new Todo to your list</Title>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        title: { value: string };
                    };
                    const text = target.title.value;
                    add(text);
                    target.title.value = '';
                }}
            >
                <Label htmlFor="title">title</Label>
                <input type="text" name="title" placeholder="Your next todo" />
                <Button type="submit">Add</Button>
            </Form>
        </Container>
    );
};
