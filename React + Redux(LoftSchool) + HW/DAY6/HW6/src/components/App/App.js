import React, {Component} from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budjet from '../Budjet';
export default class App extends Component {
    render() {
        return(
            <div className="App">
                <Market/>
                <Farm/>
                <Budjet/>
            </div>
        );
    };
};