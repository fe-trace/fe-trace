import React from 'react';
import Panel from './panel.js';

const { useState, useMemo } = React;
export default function() {
    const [ count, set ] = useState(0);
    const d = useMemo(() => {
        return "memo"
    });

    console.log(`memo: ${d}`);

    return (
        <Panel title="useMemo demo">
            <div>count: { count }</div>
            <div>
                <span onClick={() => set(count + 1)}>add count</span>
            </div>
            <div>
                Tips: useMemo(fn, [])和useCallback(fn, [])功能类似，useMemo中fn会立即执行   
            </div>
        </Panel>
    );
}