import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';
import './styles/index.scss';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);
