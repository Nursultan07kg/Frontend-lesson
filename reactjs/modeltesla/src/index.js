import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mod from './Mod_Tes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
        <Mod/>
      </>
);

// If you wanmodet to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
