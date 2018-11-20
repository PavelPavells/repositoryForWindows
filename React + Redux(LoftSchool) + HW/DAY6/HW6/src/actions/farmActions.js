export function moveOrderToCustomer(order) {
    return {
        type : 'MOVE_ORDER_TO_CUSTOMER',
        payload : order,
    };
};
