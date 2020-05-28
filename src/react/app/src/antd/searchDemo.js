import React from 'react'
import { Input } from 'antd'

export default class ImagePickerDemo extends React.Component {
    onChange = () => {
        console.log()
    }
    render() {
        return (
            <Input
                onChange={this.onChange}
            ></Input>
        )
    }
}