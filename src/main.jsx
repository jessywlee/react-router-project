import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router';
import Route from './router/Route'
import Root from './components/Root'
import About from  './components/About'
// import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Route path="/" component={< Root/>} />
    <Route path="/about" component={<About />} />
  </Router>
);
