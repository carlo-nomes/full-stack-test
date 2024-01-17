import { Check, Trash, X } from 'lucide-react';
import { Todo } from './types/todo';
import BatteryIcon from './BatteryIcon';
import Button from './Button';

type ListProps = {
    title: string;
    todos: Todo[];
    filter: boolean;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
};

export default function List({ title, todos, filter, deleteTodo, toggleTodo }: ListProps) {
    const priorityMapping: { [key: string]: number } = { high: 3, medium: 2, low: 1 };

    return (
        <div>
            <p className="text-lg font-medium">{title}</p>
            {todos.filter((item) => item.completed === filter).length === 0 ? <p className="mt-4">No todos found.</p> : null}
            <ul>
                {todos
                    .filter((item) => item.completed === filter)
                    .sort((a, b) => priorityMapping[b.priority] - priorityMapping[a.priority])
                    .map((todo) => (
                        <li key={todo.id} className="flex py-6 border-b items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div>{todo.completed ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}</div>
                                <p className={todo.completed ? 'strikethrough' : ''}>{todo.title}</p>
                                <BatteryIcon priority={todo.priority} />
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    icon={todo.completed ? <X className="w-6 h-6" /> : <Check className="w-6 h-6" />}
                                    onClick={() => toggleTodo(todo.id)}
                                ></Button>
                                <Button icon={<Trash />} onClick={() => deleteTodo(todo.id)}></Button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
