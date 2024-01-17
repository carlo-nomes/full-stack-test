import { QueryClientProvider } from '@tanstack/react-query';
import Todos from './pages';
import { queryClient } from './api/todos';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
            <Toaster position="top-center" />
        </QueryClientProvider>
    );
};

export default App;
