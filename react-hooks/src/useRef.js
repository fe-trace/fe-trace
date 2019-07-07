import React from 'react';
import Panel from './panel';

const { useState, useRef, useEffect } = React;
export default function Ref(props) {
    const [ count, set ] = useState(0);
    const ref = useRef(null);
    const clearTimer = () => {
        clearInterval(ref.current);
        set(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            set((state) => state + 1);
        }, 1000);

        ref.current = timer;
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <Panel title="useRef demo">
            <div>timer: { count }</div>
            <span onClick={clearTimer}>clear timer</span>
        </Panel>
    );
};