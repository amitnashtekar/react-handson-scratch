import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import UserContextProvider from './Contexts/User/UserContext';

const app = (
    <BrowserRouter>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));