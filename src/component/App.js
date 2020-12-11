import React, { Component } from 'react';
import Header from './header';
import IdxContent from './idxContent'
import '../style/style.css'

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <IdxContent></IdxContent>
            </div>
        );
    }
}

export default App;