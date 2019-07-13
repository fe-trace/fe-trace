import React from 'react';

const DataContext = React.createContext(null);

function Child(props) {
    return (
        <DataContext.Consumer>
            {
                (data) => {
                    return (<div>context data: { data }</div>);
                }
            }
        </DataContext.Consumer>
    );
}

class Child_1 extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>{ this.props.count }</div>
        );
    }
}

class Wrap extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <Child count={ this.props.count } />
            </div>
        );
    }
}

function Context() {
    const [ count, setCount ] = React.useState(0);

    return (
        <DataContext.Provider value={count}>
            <Wrap count={count} />
            <button onClick={() => setCount(count+1)}>add</button>
        </DataContext.Provider>
    );
}

export default function() {
    return (<Context />);
}

/**
 * http://note.youdao.com/noteshare?id=b419457db890ebebc315f23db1ef41f8
 **/