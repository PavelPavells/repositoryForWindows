import React, {Component} from 'react';
import './App.css';
import Switcher from './Switcher';
import CardNumberHolder from './CardNumberHolder';
import ModalButton from './ModalButton';
class App extends Component {
    render() {
        return(
            <Switcher>
                <CardNumberHolder/>
                <ModalButton/>
            </Switcher>
        );
    };
};
export default App;