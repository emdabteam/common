import { OrderStatus } from "..";
import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
  subject: OrderStatus.Cancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
};