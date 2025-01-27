function countDeliveredOrders(orders) {
  return orders.filter((order) => order.delivered).length;
}
