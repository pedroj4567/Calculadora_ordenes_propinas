import { Dispatch, SetStateAction } from "react";
import { OrderActions } from "../reducers/order-reducer";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface TipOptions {
  id: string;
  value: number;
  label: string;
}

export type OrderItem = MenuItem & {
  quantity: number;
};

export interface MenuItemsProps {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
}

export interface OrderContentsProps {
  orders: OrderItem[];
  dispatch: Dispatch<OrderActions>;
}

export interface OrderTotalProps {
  orders: OrderItem[];
  tips: number;
  dispatch: Dispatch<OrderActions>;
}

export interface TipPercentajeFormProps {
  tips: number;
  dispatch: Dispatch<OrderActions>;
}
