import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

export default function marketReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [action.payload, ...state.orders] };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id),
      };
    default:
      return state;
  }
}
