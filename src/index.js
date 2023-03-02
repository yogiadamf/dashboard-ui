import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContexProvider } from './contexts/ContexProvider';

ReactDOM.render(
    <ContexProvider>
        <App/>
    </ContexProvider>,
    document.getElementById('root'));  
