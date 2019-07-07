import React from 'react';
import Panel from './panel.js';

const { useState, useRef } = React;
export default function() {
    const [ count, set ] = useState(0);
    const ref  = useRef(null);
    const fn = () => {
        // lazy init ref
        if(count%3 === 0) {
            ref.current = count;
        }
    };

    fn();
    console.log("ref: ", ref.current);
    return (
        <Panel title="useRef lazy init">
            <div>count: {count}</div>
            <div>
                <span onClick={() => set(count + 1)}>add count</span>
            </div>
        </Panel>
    );
}