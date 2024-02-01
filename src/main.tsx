import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import {App} from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <VisibilityProvider>
      <App />
    </VisibilityProvider>,
);
