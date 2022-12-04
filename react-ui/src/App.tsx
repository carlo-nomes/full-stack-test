import { useEffect } from 'react';
import styled from 'styled-components';

import Error from './Error';
import Loading from './Loading';

import List from './List';
import Add from './Add';

import useTodos from './useTodos';
import Title from './Title';

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
`;

const App = () => {
    const [todos, { getAll, add, remove, toggle }, { loading, error }] = useTodos();

    useEffect(() => {
        getAll();
    }, []);

    return (
        <Wrapper>
            <Title.H1>Todo List</Title.H1>
            <Error error={error} />
            <Loading loading={loading}>
                <List todos={todos} onDelete={remove} onToggle={toggle} />
                <Add onAdd={add} />
            </Loading>
        </Wrapper>
    );
};

export default App;
