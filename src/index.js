import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './containers/Profile'
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
       <>
        <Profile />
       </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
