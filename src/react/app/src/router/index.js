import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import './index.scss';
import App from '../paratice';
import Steps from '../examples/steps-demo';
import StepsHooks from '../components/steps-hooks';
import AMSteps from '../antd-mobile/steps-demo';
import AMImagePicker from '../antd-mobile/image-picker-demo';
// import AMImagePicker from '../antd/image-picker-demo';
import UploadDemo from '../antd/upload';
import FontDemo from '../font/pingfangsc-demo';

export default function RouterDOM() {
    return (<Router>
        <ul className="menu">
            <li className="menu__item"><Link to="/paratice">相关练习</Link></li>
            <li className="menu__item"><Link to="/font">相关练习</Link></li>
            <li className="menu__item"><Link to="/am/steps">antd steps 组件</Link></li>
            <li className="menu__item"><Link to="/co/steps">steps 组件</Link></li>
            <li className="menu__item"><Link to="/co/steps-hooks">steps 函数组件</Link></li>
            <li className="menu__item"><Link to="/am/image-picker">image-picker 组件</Link></li>
            <li className="menu__item"><Link to="/am/upload">upload 组件</Link></li>
            <li className="menu__item"><Link to="/am/picker">picker 组件</Link></li>
        </ul>
        
        <Route path="/paratice" exact component={App} />
        <Route path="/font" exact component={FontDemo} />
        <Route path="/co/steps" component={Steps} />
        <Route path="/co/steps-hooks" component={StepsHooks} />
        <Route path="/am/steps" component={AMSteps} />
        <Route path="/am/image-picker" component={AMImagePicker} />
        <Route path="/am/upload" component={UploadDemo} />
    </Router>)
}