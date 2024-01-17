import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalStyles } from './GlobalStyles';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Toaster />
        <GlobalStyles />
        <App />
    </React.StrictMode>,
);
