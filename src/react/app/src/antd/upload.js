import React from 'react'
import { Upload } from 'antd'
import ky from 'ky-universal';
const forge = require('node-forge');

export default class UploadDemo extends React.Component {
    async onImageClick(files) {
        const FormData = require('form-data');
        const formData = new FormData();
        const params = {
            reqSerialNum: '1212',
            memberId: '310000016002426182',
            agentId: '310000015002423502',
            photoType: '06',
        };
        const jsonData = JSON.stringify(params);
        const checkValue = forge.md.sha256.create().update(`${jsonData}chinapnr`).digest().toHex()
        formData.append('file', files[0].file);
        formData.append('jsonData', jsonData);
        formData.append('checkValue', checkValue);
        const postUrl = `https://nsposf.cloudpnr.com/nsposfweb/webB9002/uploadWebMerPic`;
        try {
            const resp = await ky.post(postUrl, {
                    body: formData,
                });
            const respData = resp.json();
            return {
                pictureID: respData.body.pictureID,
            };
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Upload
            ></Upload>
        )
    }
}