import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemeGenerator } from './views/MemeGenerator/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemeGenerator />
  </React.StrictMode>
);
