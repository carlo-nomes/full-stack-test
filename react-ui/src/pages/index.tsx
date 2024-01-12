import { H1 } from '../components/styled/heading';
import { Flex } from '../components/styled/flex';
import { MainContainer } from '../components/styled/container';
import AddTodoForm from '../components/add-todo-form';
import TodosList from '../components/todos-list';
import { useQuery } from '@tanstack/react-query';
import { getAllTodos, todosQueryKey } from '../api/todos';
import { Todo } from '../types';

export default function Todos() {
    const { data: todos, isLoading } = useQuery({
        queryKey: [todosQueryKey],
        queryFn: getAllTodos,
    });

    const uncompletedTodos = (todos || []).filter((todo: Todo) => !todo.completed);
    const completedTodos = (todos || []).filter((todo: Todo) => todo.completed);

    return (
        <MainContainer>
            <H1>Todo.</H1>
            <Flex $direction="column" $gap={32}>
                <AddTodoForm />
                <TodosList todos={uncompletedTodos} loading={isLoading} emptyMessage="Nothing to do?" />
            </Flex>
            <H1>Done.</H1>
            <TodosList todos={completedTodos} loading={isLoading} />
        </MainContainer>
    );
}
