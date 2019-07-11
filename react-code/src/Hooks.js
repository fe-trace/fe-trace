import React from 'react';

const { useState, useEffect } = React;

export default function Hook() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log("count: ", count);
    });

    return (
        <div>
            <div>count: { count }</div>
            <span onClick={() => setCount(count + 1)}>click</span>
        </div>
    );
};

/**
FiberNode {
    index: 元素在同级子元素中的索引
    child: 元素的第一个子元素
    sibling: 元素的兄弟节点
    return: 元素的父元素
    memoizedState: 函数组件中第一个hook
    { 
        next：下一个hook
    }
}
函数组件渲染过程中会将每次调用hook转化成记录，以链表的形式通过memoizedState属性保存在组件的Fiber对象上。
memoizedState通过next属性指向下一个hook。
每次更新时会在上一次Fiber对象的基础上进行，对旧的链表进行拷贝，然后进行数据更新并修改memoizedState对象。
所以函数组件可以实现capture value特性，每次渲染都持有渲染所需的全部数据，同时还能保存之前的数据。

上例中可以通过：document.querySelector('#app')._reactRootContainer._internalRoot.current.child.child 查看具体的Fiber对象
*/