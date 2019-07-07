import React from 'react';
import Panel from './panel.js';

const { useState, useEffect } = React;
export default function Comp(props) {
    const [ count, set ] = useState(0);
    const [ toggle, setToggle ] = useState(false);

    useEffect(() => {
        let timer = null;

        if(toggle) {
            timer = setInterval(() => {
                console.log(`effect timer ${ count }`);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [toggle]);

    return (
        <Panel title="useEffect demo">
            <div>count: { count }</div>
            <div>
                <span onClick={() => set(count+1)}>add count</span>
            </div>
            <div>
                <span onClick={() => setToggle(!toggle)}>{ toggle ? "end" : "start" } timer</span>
            </div>
        </Panel>
    );
}