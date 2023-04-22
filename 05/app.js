import React from "react";
import { createRoot } from 'react-dom/client';
import Weather from "./Weather";

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
  render(){
    return (
        <Weather lat={51.107883} lon={17.038538} />
    )
      
  }
}

root.render(<App/>)