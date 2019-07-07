import React from 'react';

const style = {
    header: {
        height: '30px',
        lineHeight: '30px',
        border: '1px solid #eee',
        padding: '0 10px',
        cursor: 'pointer'
    },
    body: {
        padding: '10px',
        border: '1px solid #eee'
    }
};
const { useState } = React;
function Panel(props) {
    const [ show, toggle ] = useState(false);

    return (
        <div style={style.container}>
            <div className="panel" onClick={() => toggle(!show)} style={ style.header }>{ props.title || "titlle" }</div>
            {
                show && (
                    <div className="panel" style={ style.body }>
                        { props.children }
                    </div>
                )
            }
        </div>
    );
}

export default Panel;