import React from 'react';
import Panel from './panel.js';

const { useState, useEffect, useLayoutEffect } = React;
function fn(props) {
    const [ count, set ] = useState(0);

    Promise.resolve().then(() => {
        console.log('promise');
    });
    useEffect(() => {
        console.log('effect: ', count);
        return () => {
            console.log('effrct unmount: ', count);
        };
    }, [count]);
    useLayoutEffect(() => {
        console.log('layout effect: ', count);
        return () =>{
            console.log('layout effect unmount: ', count);
        };
    });
    console.log('render');
    return (
        <Panel title="useState && useEffect">
            <div>count: { count }</div>
            <div>
                <span onClick={() => set(count + 1)}>click</span>
            </div>
            <div>
                <div>Tips: </div>
                <div>1.hooks执行顺序：render > layout effect(同步执行) > effect</div>
                <div>2.hooks unmount执行顺序：render > layout effect unmount(同步执行) > layout effect(同步执行) > effect unmount > effect</div>
            </div>
        </Panel>
    );
}

export default fn;