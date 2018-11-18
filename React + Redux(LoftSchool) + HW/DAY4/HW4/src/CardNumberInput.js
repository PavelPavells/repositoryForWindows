import React, {Component} from 'react';
class CardNumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {number : this.format(props.cardNUmber)};
    }
    componentWillReceiveProps(nextProps) {
        this.setState({number : this.format(nextProps.cardNUmber)});
    }
    format = value => {
        if(value) {
            const str = value.toString();
            const chars = value.split('');
            let formatStr = '';
            chars.forEach((char, index) => {
                formatStr += char;
                if((index + 1) % 4 === 0) {
                    formatStr += ' ';
                };
            });
            return formatStr;
        };
        return '';
    };
    normalize = str => {
        return str.replace(/[' ']/g, '');
    };
    render() {
        return(
            <input
                type="text"
                value={this.state.number}
                onChange={this.handleChange}
            />
        );
    };
};
export default CardNumberInput;