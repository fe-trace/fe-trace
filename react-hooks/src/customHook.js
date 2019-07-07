import React from 'react';
import Panel from './panel.js';

const { useState, useEffect } = React;

function usePowHook(init) {
    const [ count, setCount ] = useState(init);
    const [ pow, setPow ] = useState(null);

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(count * count);
        }).then((data) => {
            setPow(data);
        });
    }, [count]);

    return [count, pow, setCount];
}

export default function() {
    const [ count, pow, setCount ] = usePowHook(0);

    return (
        <Panel title="custom hook demo">
            <div>count: { count } - pow: { pow }</div>
            <span onClick={() => setCount(count + 1)}>add count</span>
        </Panel>
    );
}