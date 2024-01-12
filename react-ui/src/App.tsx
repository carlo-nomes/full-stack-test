import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todos from './pages';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    );
};

export default App;
