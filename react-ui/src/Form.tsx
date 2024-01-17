const options = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

export default function Form({ addTodo, loading }: { addTodo: (title: string, priority: string) => void; loading: boolean }) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const { title, priority } = Object.fromEntries(formData);

        addTodo(title, priority);
        (event.target as HTMLFormElement).reset();
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 mt-4 items-center justify-between">
            <input required className="rounded h-10 w-full border-neutral-400" type="text" name="title" />
            <select name="priority" className="rounded h-10 cursor-pointer border-neutral-400">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button
                disabled={loading}
                className="bg-black disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-600 transition h-10 px-6 rounded text-white "
                type="submit"
            >
                Add
            </button>
        </form>
    );
}
