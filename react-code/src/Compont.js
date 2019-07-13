import React from 'react';

const { useState } = React;
class ClassComponent extends React.Component {
    constructor(props, context) {
        console.log("data: ", props, context, rest);
        super(props);
        this.state = {
            count: 0
        };
    }
    
    handleClick = () => {
        this.setState((state, props) => {
            console.log('props: ', props);
            return {
                count: state.count + 1
            };
        });
    }

    handleDelay = () => {
        setTimeout(() => {
            console.log('class component delay console: ', this.state.count);
        }, 3000);
    }

    render() {
        return (
            <div>
                <div>class componnet</div>
                <span>{ this.state.count }</span>
                <div>
                    <span id="btn" className="btn" onClick={ this.handleClick }>add count</span>
                    <span className="btn" onClick={ this.handleDelay }>console delay</span>
                </div>
            </div>
        );
    }
}

function FunctionComponent() {
    const [ count, setCount ] = useState(0);
    const delayConcole = () => {
        setTimeout(() => {
            console.log('function component delay console: ', count);
        }, 3000);
    }

    return (
        <div>
            <div>function componnet</div>
            <span>{ count }</span>
            <div>
                <span className="btn" onClick={() => setCount(count+1)}>add count</span>
                <span className="btn" onClick={delayConcole}>console delay</span>
            </div>
        </div>
    );
}

export default function() {
    return (
        <React.Fragment>
            <ClassComponent name='comp' />
            {/* <FunctionComponent /> */}
        </React.Fragment>
    );
}
/**
 * 函数组件在Hooks出现之后，拥有了Class组件的特性，上面的例子演示来了函数组件的：capture value 特性
 * React的设计理念是：数据始终是不变的(immutable)，每次setState都会返回全新的State。
 * 函数组件中访问state返回的是当次渲染时的保存数据，说明函数组件拥有Hooks的capture value特性。
 * 但是上例在定时器中访问State的值确是可变的，根本原因是this.state的指向改变了，不是State改变了。
 * 
 * 备注：
 * 1.类组件实例化时参数为：props和context
 * 2.setState方法调用时传递的参数为：state和props
 **/ 