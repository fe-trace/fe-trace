import React from 'react';
import Panel from './panel.js';

const { useRef, useEffect, useImperativeHandle, forwardRef } = React;

function Child(props, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        setValue: (val) => {
            inputRef.current.value = val;
        }
    }));
    return (
        <input ref={inputRef} />
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