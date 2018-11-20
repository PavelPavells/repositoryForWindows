import React, { Component } from 'react';
import './Order.css';

export default class OrderItem extends Component {
  render() {
    const { ...order } = this.props.order;
    return (
      <div className="order">
        <div className="order__upper">
          <p className="p--order">Название: {order.name}</p>
          <p className="p--order">Цена: {order.price}</p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {Date(order.createdAt)}</p>
        </div>
      </div>
    );
  }
}
