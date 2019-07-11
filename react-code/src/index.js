import React from 'react';
import { render } from 'react-dom';
import ComponentCompare from './Compont.js';
import Hook from './Hooks.js';

function App(props) {
    return (
        <React.Fragment>
            {/* <ComponentCompare /> */}
            <Hook />
        </React.Fragment>
    );
}

render(<App />, document.querySelector('#app'));