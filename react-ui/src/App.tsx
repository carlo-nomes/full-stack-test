import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todos from './pages';
import { queryClient } from './api/todos';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    );
};

export default App;
