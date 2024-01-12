import { H1 } from '../components/styled/heading';
import { Flex } from '../components/styled/flex';
import AddTodoForm from '../components/add-todo-form';
import { Suspense } from 'react';
import Loading from '../components/styled/loading';
import UncompletedTodos from '../components/uncompleted-todos';
import CompletedTodos from '../components/completed-todos';
import { MainContainer } from '../components/styled/container';
import { Todo } from '../types';
import { useQuery } from '@tanstack/react-query';
import { getAllTodos, todosQueryKey } from '../api/todos';

export default function Todos() {
    const { data: todos, isLoading } = useQuery({
        queryKey: [todosQueryKey],
        queryFn: getAllTodos,
    });

    const uncompletedTodos = todos?.filter((todo: Todo) => !todo.completed);
    const completedTodos = todos?.filter((todo: Todo) => todo.completed);

    return (
        <MainContainer>
            <H1>Todo.</H1>
            <Flex $direction="column" $gap={32}>
                <AddTodoForm />
                <Suspense fallback={<Loading />}>
                    <UncompletedTodos uncompletedTodos={uncompletedTodos} />
                </Suspense>
            </Flex>
            <H1>Done.</H1>
            <Suspense fallback={<Loading />}>
                <CompletedTodos completedTodos={completedTodos} />
            </Suspense>
        </MainContainer>
    );
}
