import React from 'react';
import Panel from './panel.js';

const { useState } = React;
const handle = function(count, type) {
    console.log('type: ', count);
    return `type: ${type} - value: ${count}`;
};
export default function() {
    const [ count, set ] = useState(0);
    const [ one, setOne ] = useState(handle('one', count));
    const [ two, setTwo ] = useState(() => {
        console.log('handle two !!!');
        return handle('two', count);
    });

    return (
        <Panel title="useState优化">
            <div>count: { count }</div>
            <div>one count: { one }</div>
            <div>two count: { two }</div>
            <div>
                <span onClick={() => set(count + 1)}>add count</span>
            </div>
            <div>
                Tips: useState(fn => state)和useState(fn())区别：useState(fn)中fn只会执行一次，useState(fn())中fn每次reRender都会执行
            </div>
        </Panel>
    );
}