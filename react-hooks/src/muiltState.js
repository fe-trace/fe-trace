import React from 'react';
import Panel from './panel.js';

const { useState } = React;
export default function(props) {
    const [ user, set ] = useState({
        addr: 'CQ'
    });
    const key = React.createRef(null);
    const val = React.createRef(null);
    const setUserInfo = function() {
        set((state) => {
            return Object.assign({}, state, {
                [key.current.value]: val.current.value
            });
        });
    };

    return (
        <Panel title="muilt state">
            <div>useInfo: { JSON.stringify(user) }</div>
            <div>
                <input ref={key} placeholder="user[key]" />
            </div>
            <div>
                <input ref={val} placeholder="user[value]" />
            </div>
            <span onClick={setUserInfo}>set user info</span>
            <div>
                Tips: hooks中修改state不会自动合并之前的state值，类组件中this.setState会自动合并老的state
            </div>
        </Panel>
    );
}