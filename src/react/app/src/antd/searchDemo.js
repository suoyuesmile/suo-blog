import React from 'react'
import { Input } from 'antd'

export default function ImagePickerDemo() {
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