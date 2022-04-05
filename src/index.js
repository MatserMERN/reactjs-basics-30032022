import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDom from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDom.createRoot(document.getElementById('root'))
        .render(
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              )
// const container =  document.getElementById('root')
// const root = ReactDom.createRoot(container)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
