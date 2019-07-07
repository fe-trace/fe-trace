import React from 'react';
import Panel from './panel.js';

const { useContext, createContext } = React;
const ConfigContext = createContext('default');

function Child() {
    const data = useContext(ConfigContext);

    return (
        <div>{ data }</div>
    );
}

export default function() {
    const data = useContext(ConfigContext);
    
    return (
        <Panel title="use context demo">
            <ConfigContext.Provider value="abc">
                <Child />
            </ConfigContext.Provider>
        </Panel>
    );
}