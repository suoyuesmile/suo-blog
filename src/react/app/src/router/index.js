import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import './index.scss';
import App from '../paratice';
import Steps from '../components/steps';
import AMSteps from '../antd-mobile/steps-demo';
import AMImagePicker from '../antd-mobile/image-picker-demo';
import AMPicker from '../antd-mobile/picker-demo';
import FontDemo from '../font/pingfangsc-demo';

export default function RouterDOM() {
    return (<Router>
        <ul className="menu">
            <li className="menu__item"><Link to="/paratice">相关练习</Link></li>
            <li className="menu__item"><Link to="/font">相关练习</Link></li>
            <li className="menu__item"><Link to="/co/steps">steps 组件</Link></li>
            <li className="menu__item"><Link to="/am/steps">antd steps 组件</Link></li>
            <li className="menu__item"><Link to="/am/image-picker">image-picker 组件</Link></li>
            <li className="menu__item"><Link to="/am/picker">picker 组件</Link></li>
        </ul>
        
        <Route path="/paratice" exact component={App} />
        <Route path="/font" exact component={FontDemo} />
        <Route path="/co/steps" component={Steps} />
        <Route path="/am/steps" component={AMSteps} />
        <Route path="/am/image-picker" component={AMImagePicker} />
        <Route path="/am/picker" component={AMPicker} />
    </Router>)
}