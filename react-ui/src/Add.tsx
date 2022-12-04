import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import Title from './Title';

const Wrapper = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;

    .title {
        width: 100%;
    }

    input {
        flex: 1;
    }
`;

type Props = { onAdd: (text: string) => void };
const Add = ({ onAdd }: Props) => {
    return (
        <Wrapper
            onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    title: { value: string };
                };
                const text = target.title.value;
                onAdd(text);
                target.title.value = '';
            }}
        >
            <Title.H2 className="title">Add Todo</Title.H2>

            <Label htmlFor="title">Title</Label>
            <Input type="text" name="title" placeholder="Something to do..." />

            <Button type="submit">Add</Button>
        </Wrapper>
    );
};

export default Add;
