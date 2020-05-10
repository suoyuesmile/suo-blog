import React from 'react'
import { ImagePicker } from 'antd-mobile'

export default class ImagePickerDemo extends React.Component {
    onImageClick() {
        
    }
    render() {
        return (
            <ImagePicker
                length={1}
                onImageClick={this.onImageClick}
            ></ImagePicker>
        )
    }
}