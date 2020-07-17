import React from 'react';
import './steps-demo.scss'
import { InputItem } from 'antd-mobile';

export default InputItem() {
    state = {
        value: ''
    };

    render() {
        return <div style={{margin: '15px'}}>
            <InputItem></InputItem>
        </div>
    }
}