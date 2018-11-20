import React, {Component} from 'react';
import './Budjet.css';
import{connect} from 'react-redux';
class Budjet extends Component {
    render() {
        const {
            profit,
            marketExpanse,
            deliveryExpanse,
            farmExpanse,
        } = this.props.budjet;
        const total = profit - (marketExpanse + deliveryExpanse + farmExpanse);
        return(
            <div className="budjet">
                <h2>Бюджет</h2>
                <p>Всего получено денег : {profit}</p>
                <p>Расходы продавцов : {0 - marketExpanse}</p>
                <p>Расходы на ферме : {0 - farmExpanse}</p>
                <p>Расходы на доставку : {0 - deliveryExpanse}</p>
                <p>Итого : {total}</p>
            </div>
        ); 
    };
};
const mapStateToProps = state => ({budjet : state.budjet});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Budjet);