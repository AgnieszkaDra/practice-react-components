import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));
console.log('02')
class Counter extends React.Component {
    state = {
        amount: 0,
    }

    changeAmount = () => {
        this.setState({
            amount: this.state.amount+ 1 
        })
    }
    
    render() {
        
        return <button onClick= { this.changeAmount }>click me ({ this.state.amount })</button>
    }
}

root.render(<Counter />);
