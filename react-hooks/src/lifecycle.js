import React from 'react';
import Panel from './panel.js';

const { useState, useRef } = React;
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'default',
            age: 1  
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            name: props.name || state.name
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    getSnapshotBeforeUpdate(preProps, preState) {
        console.log(preProps, preState);
        return { key: 'snap' };
    }

    componentDidUpdate(preProps, preState, snap) {
        console.log(snap);
    }

    componentDidMount() {
        setTimeout(() => {
            // forceUpdate会强制更新组件，shouldComponentUpdate返回值不影响组件重新渲染
            this.forceUpdate();
        }, 5000);
    }

    render() {
        return (
            <div>Child: { JSON.stringify(this.state) }</div>
        );
    }
}

export default function() {
    const ref = useRef(null);
    const [ data, setData ] = useState('parent');
    const handleChange = () => {
        setData(ref.current.value);
    };

    return (
        <Panel title="v16生命周期函数">
            <Child name={data} />
            <div>
                <input ref={ref} />
                <span onClick={handleChange}>change</span>
            </div>
        </Panel>
    );
}