import React from 'react';
import Panel from './panel.js';

const { useRef, useState, useImperativeHandle, forwardRef } = React;

function Child(props, ref) {
    // const inputRef = useRef();
    const [ count, set ] = useState(0);

    useImperativeHandle(ref, () => ({
        setValue: (val) => {
            set(val);
        }
    }));
    return (
        <div>
            <span>{count}</span>
        </div>
    );
}

const ChildWrap = forwardRef(Child);
export default function() {
    const ref = useRef(null);
    const handleChange = () =>{
        ref.current.setValue('abc');
    };

    return (
        <Panel title="useImperativeHandle demo">
            <ChildWrap ref={ref} />
            <span onClick={handleChange}>setValue</span>
            <div>
                Tips: useRef作为父子组件通信的一种方式，配合useImperativeHandle可以在子组建中修改父组件传递下来的ref属性，更便于父组件控制子组件
            </div>
        </Panel>
    );
}