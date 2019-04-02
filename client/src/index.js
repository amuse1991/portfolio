import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../src/static/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { HashRouter,Route } from "react-router-dom";

import Main from "./components/body/pages/Main";
import Profile from "./components/body/pages/Profile";
import Projects from "./components/body/pages/Projects";
import Skills from "./components/body/pages/Skills";

window.React = React;

ReactDOM.render(
    <HashRouter>
        <div calssName="index">
            <Route exact path = "/" component={Main}/>
            <Route path = "/profile" component={Profile}/>
            <Route exact path = "/projects" component={Projects}/>
            <Route exact path = "/Skills" component={Skills}/>
        </div>
    </HashRouter>,document.getElementById('root')
)
serviceWorker.unregister();

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
