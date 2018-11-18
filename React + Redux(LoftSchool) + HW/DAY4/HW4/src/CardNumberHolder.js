import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';
class CardNumberHolder extends Component {
    static displayName = 'CardNumber';
    state = {
        CardNumber : '',
    };
    handleChange = cardNumber => {
        this.setState({CardNumber});
    };
    render() {
        return(
            <div className="component-wrapper">
                <CardNumderInput
                    cardNumber = {this.state.cardNumber}
                    handleChange = {this.handleChange}
                />
            </div>
        );
    };
};
export default CardNumberHolder;