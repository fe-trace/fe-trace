import React from 'react';
import Panel from './panel.js';

const { useReducer } = React;
const reducer = function(state, payload) {
    if(payload.type == "+") {
        return Object.assign({}, {
            count: state.count + 1
        });
    } else if(payload.type == "-") {
        return Object.assign({}, {
            count: state.count - 1
        });
    } else {
        return state;
    }
};

export default function() {
    const [state, dispatch ] = useReducer(reducer, {
        count: 0
    });
    return (
        <Panel title="use reduce demo">
            <div>state: { state.count }</div>
            <div onClick={() => dispatch({type: "+"}) }>+</div>
            <div onClick={() => dispatch({type: "-"}) }>-</div>
        </Panel>
    );
};