import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Farm.css';
import {moveOrderToCustomer} from '../../actions/farmActions';
import Order from '../Order';
class Farm extends Component {
    handleMoveOrderToCustomer =() => {
        const order = this.props.orders[this.props.orders.length - 1];
        this.props.moveOrderToCustomer(order);
    };
    render() {
        const moveOrderDisabled = !this.props.orders || this.props.orders.length;
        return(
            <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={moveOrderDisabled}
          onClick={this.handleMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {this.props.orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
        );
    };
};
const mapStateToProps = state => ({orders : state.farm.orders});
const mapDispatchToProps = dispatch => ({
    moveOrderToCustomer : order => dispatch(moveOrderToCustomer(order)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Farm);