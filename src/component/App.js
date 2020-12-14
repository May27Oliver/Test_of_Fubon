import React, { Component } from 'react';
import Header from './header';
import IdxContent from './idxContent';
import Footer from './footer';
import TopButton from './topButtom'
import '../style/style.css';


class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <IdxContent></IdxContent>
                <Footer></Footer>
                <TopButton></TopButton>
            </div>
        );
    }
}

export default App;