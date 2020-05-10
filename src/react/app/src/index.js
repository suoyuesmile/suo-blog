import React from 'react';
import ReactDOM from 'react-dom';
import RouterDOM from './router/index'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
    <Router>
        <Route path="/" exact component={RouterDOM}></Route>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
