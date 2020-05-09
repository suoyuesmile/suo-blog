import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import App from './paratice'
import Steps from './components/steps';
import AMSteps from './antd-mobile/steps-demo';

export default function RouterDOM() {
    return (<Router>
        <li><Link to="/paratice">练习</Link></li>
        <li><Link to="/c/steps">steps 组件</Link></li>
        <li><Link to="/am/steps">antd steps 组件</Link></li>
        
        <Route path="/paratice" exact component={App} />
        <Route path="/c/steps" component={Steps} />
        <Route path="/am/steps" component={AMSteps} />
    </Router>)
}