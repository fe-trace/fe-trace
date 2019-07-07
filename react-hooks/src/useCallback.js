import React from 'react';
import Panel from './panel.js';

const { useState, useEffect, useCallback } = React;

function Child(props) {
    const [ data, set ] = useState(null);

    useEffect(() => {
        props.callback().then((d) => {
            set(d);
        });
    }, [props.callback]);

    return (
        <div>
            <div>children: {data}</div>
        </div>
    );
}

export default function() {
    const [ count, set ] = useState(0);
    const callback = useCallback(() => {
        return Promise.resolve(`data-${count}`);
    }, [count]);
    
    return (
        <Panel title="use callback demo">
            <div>count: { count }</div>
            <div>
                <span onClick={() => set(count + 1)}>add count</span>
            </div>
            <Child callback={callback} />
        </Panel>
    );
}