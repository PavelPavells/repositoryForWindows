export function createOrder(order) {
    return {
        type : 'CREATE_ORDER',
        payload : order,
    };
};
export function moveOrderToFarm(order) {
    return {
        type : 'MOVE_ORDER_TO_FARM',
        payload : order,
    };
};