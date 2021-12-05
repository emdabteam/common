export enum OrderStatus {
  // when the order has been created but the ticket it is trying to order has not been reserved
  Created = 'created',
  // the ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order.
  // The order expires before payment.
  Cancelled = 'cancelled',
  // the order has successfully reserved a ticket
  AwaitingPayment = 'awaiting:payment',
  // the order has reserved the ticket and the user provided payment successfully
  Complete = 'complete'
}