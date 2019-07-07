import React from 'react';
import { render } from 'react-dom';
import UseState from './useState.js';
import UseStata_1 from './useState_1.js';
import UseEffect from './useEffect.js';
import UseRef from './useRef.js';
import MuiltState from './muiltState.js';
import UseReducer from './useReduce.js';
import UseCallback from './useCallback.js';
import UseMemo from './useMemo.js';
import UseRefLazy from './useRef_lazy.js';
import CustomHook from './customHook.js';
import ImperativeHook from './useImperativeHandle.js';
import UseContext from './useContext.js';
import LifeCycle from './lifecycle.js';

function App(props) {
    return (
        <div>
            {/* <UseState /> */}
            {/* <UseStata_1 /> */}
            {/* <UseEffect /> */}
            {/* <UseRef /> */}
            {/* <MuiltState /> */}
            {/* <UseReducer /> */}
            {/* <UseCallback /> */}
            {/* <UseMemo /> */}
            {/* <UseRefLazy /> */}
            {/* <CustomHook /> */}
            {/* <ImperativeHook /> */}
            {/* <UseContext /> */}
            <LifeCycle />
        </div>
    );
}

render(<App />, document.querySelector("#app"));