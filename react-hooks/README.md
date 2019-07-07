## react hook demo
### useState：让函数组件拥有内部状态
### useEffect：让函数组件拥有生命周期函数
### useLayoutEffect：和useEffect功能类似，执行在render之后同步执行
### useRef：1.在hook存储访问变量的最新值，避免capture value特性；2.可以在父子组件之间传递数据，方便父组件控制子组件
### useCallback：一般用于组件优化，依赖改变时返回的回调函数才发生变化
### useMemo：和useCallbak功能类似，callback在依赖改变时自动执行
### useReducer：简化版的redux
### useImperativeHandle：配合useRef使用，方便父组件控制子组件
### useContext：功能和React.createContext一样