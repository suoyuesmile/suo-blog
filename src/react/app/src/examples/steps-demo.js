import StepHooks from '../components/steps-hooks'
import React from 'react';

const options = [
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方因收方客户拒收快递,待进一步处理因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    }
]
export default function stepsDemo() {
    return <div>
        <StepHooks options={options} expand={true}></StepHooks>
    </div>
}