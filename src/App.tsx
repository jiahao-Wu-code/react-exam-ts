import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './router';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <RouterConfig />
            </div>
        </BrowserRouter>
    );
}

export default App;
