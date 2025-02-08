import { Dispatch, SetStateAction } from "react";

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
  addItem: (item: MenuItem) => void;
}

export interface OrderContentsProps {
  orders: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
}

export interface OrderTotalProps {
  orders: OrderItem[];
  tips: number;
  saveOrder: () => void;
}

export interface TipPercentajeFormProps {
  tips: number;
  setTip: Dispatch<SetStateAction<number>>;
}
