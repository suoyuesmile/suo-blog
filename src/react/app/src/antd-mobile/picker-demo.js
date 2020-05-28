import React from 'react';
import { Picker, List } from 'antd-mobile';
const district = [{
    label: '浙江省',
    value: '1',
    children: [
        {
            label: '杭州市',
            value: '11',
            children: [
                {
                    label: '西湖区',
                    value: '111'
                }
            ]
        }]
},
{
    label: '北京市',
    value: '2',
    children: [
        {
            label: '北京市',
            value: '21',
            children: [
                {
                    label: '朝阳区',
                    value: '211'
                }
            ]
        }
    ]
}]
const district2 = [{
    label: '浙江省使得丰富的水分',
    value: '1',
    children: [
        {
            label: '杭州市水电费水电费',
            value: '11'
        }]
},
{
    label: '北京市',
    value: '2',
    children: [
        {
            label: '北京市',
            value: '21'
        }
    ]
}]
const district3 = [{
    label: '一二三四五六七八九十一二三四五六七八九十一',
    value: '1'
}]
export default class AMPicker extends React.Component {
    render() {
        return <div style={{ margin: '15px' }}>
            12
            <Picker extra="请选择(可选)"
                data={district3}
                col={1}
            >
                <List.Item arrow="horizontal">Multiple & cascader</List.Item>
            </Picker>
        </div>
    }
}