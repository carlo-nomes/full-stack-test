import { Card } from './styled/card';
import Checkbox from './checkbox';
import { Todo } from '../types';

interface TodoProps extends Todo {}

export default function TodoItem(props: TodoProps) {
    const { title } = props;

    return (
        <Card>
            <Checkbox />
            {title}
        </Card>
    );
}
