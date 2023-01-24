import { Todos } from './todo/Todos';

import Title from './components/Title';
import Button from './components/Button';

const App = () => {
    return (
        <div>
            <Title>Welcome to the todo app</Title>
            <Todos />
        </div>
    );
};

export default App;
