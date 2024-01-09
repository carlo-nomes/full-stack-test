import AddTodoForm from './components/add-todo-form';
import { MainContainer } from './components/styled/container';
import TodosList from './components/todos-list';
import { List } from './components/styled/list';

const App = () => {
    return (
        <MainContainer>
            <List>
                <AddTodoForm />
                <TodosList />
            </List>
        </MainContainer>
    );
};

export default App;
