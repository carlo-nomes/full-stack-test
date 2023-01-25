import { SubmitButton, TextInput } from './FormComponents';

interface IToDoForm {
    onAdd: (title: string) => Promise<void>;
}

const ToDoForm = ({ onAdd }: IToDoForm) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onAdd(e.target.todo.value);
        e.target.todo.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Add new todo: </div>
            <TextInput />
            <SubmitButton />
        </form>
    );
};

export default ToDoForm;
