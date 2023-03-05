import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    
    render() {
        console.log('render');
        return <h1>{ this.state.counter }</h1>
    }

    myCallback() {
        const {counter} = this.state;
        this.setState({counter: counter + 1})
    }

    componentDidMount() {
        console.log('Komponent został zamontowany!'); 
        this.id = setInterval(this.myCallback.bind(this), 5000)  
     }

     componentDidUpdate(){
        console.log('Component did update!')   
    }

    componentWillUnmount(){
        console.log('Component will unmount');
        clearInterval(this.id);
    }
}

root.render(<App/>);
