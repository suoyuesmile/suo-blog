import React, { useState, useEffect } from 'react';

export default class Hook extends React.Component {
    render() {
        return <div>
            <HookExample></HookExample>
        </div>
    }
}

// useState & useEffect
// 它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并
function HookExample() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count}`;
    })
    return <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>加一</button>
    </div>
}

// todo 自定义hook

