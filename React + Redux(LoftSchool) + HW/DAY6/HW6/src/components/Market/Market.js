import React, { Component } from 'react';
import './Market.css';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import Order from '../Order';

import { connect } from 'react-redux';
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  c
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  handleCreateOrder = () => {
    const order = getNewOrder();
    this.props.createOrder(order);
  };
  handleMoveOrderToFarm = () => {
    const order = this.props.orders[this.props.orders.length - 1];
    this.props.moveOrderToFarm(order);
  };
  render() {
    const sendOrderDisabled = !this.props.orders || !this.props.orders.length;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={sendOrderDisabled}
          onClick={this.handleMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {this.props.orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ orders: state.market.orders });

const mapDispatchToProps = dispatch => ({
  createOrder: order => dispatch(createOrder(order)),
  moveOrderToFarm: order => dispatch(moveOrderToFarm(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
