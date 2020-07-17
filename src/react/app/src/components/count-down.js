import React from 'react';
const { useState, useEffect } = React;

export default function CountDown(props) {
    const [timecount, clearTimeCount] = useState(60);

    useEffect(() => {
        const timer = setTimeout(() => {
            clearTimeCount(timecount - 1)
        }, 1000);
        if (timecount <= 0) {
            clearTimeout(timer);
        }
    });

    return <div>
                <div>
                {timecount}
                </div>
                <button>
                    重新发送
                </button>
        </div>
}