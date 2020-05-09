import React from 'react';
import './steps-demo.scss'
import { Steps } from 'antd-mobile'

const Step = Steps.Step;
export default class StepsDemo extends React.Component {
    render() {
        return <div style={{margin: '15px'}}>
            <Steps size="small" current={2}>
                <Step title="Finished" description="似懂非懂放到沙发上发生的发生的发生的发生的范德萨发的发生的发生的发生地方大三大四的" />
                <Step title="In Progress" description="This is description" />
                <Step title="Waiting" description="This is description" />
            </Steps>
        </div>
    }
}