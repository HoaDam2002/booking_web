import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/popper.js/dist/umd/popper.min.js';
import $ from 'jquery';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

///////--------------------------------------------------------------------------------------------
import Home from './pages/frontend/Home/Home';
import Account from './components/frontend/Account/Account';
import Dashboard from './pages/admin/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Account />} />
                    <Route path="/register" element={<Account />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>,
);

window.jQuery = $;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
