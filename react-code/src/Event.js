import React from 'react';

const { useState ,useEffect } = React;
export default function() {
    const [ count, setCount ] = useState(0);
    const fn = (event) => {
        console.log(event);
    };

    useEffect(() =>{
        document.querySelector('#container').addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('click');
        });
    }, []);
    return (
        <>
            <div id="container" onClick={() => fn("1")} onClickCapture={() => fn("2")}>
                <span onClick={() => fn("3")} onClickCapture={() => fn("4")}>click</span>
            </div>
        </>
    );
}