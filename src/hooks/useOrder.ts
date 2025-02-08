import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [orders, setOrder] = useState<OrderItem[]>([]);
  const [tips, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = orders.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const orderUpdated = orders.map((orderItem) => {
        return orderItem.id === itemExists.id
          ? {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          : orderItem;
      });

      setOrder(orderUpdated);
      return;
    }

    const newItem: OrderItem = {
      ...item,
      quantity: 1,
    };

    setOrder((prevState) => [...prevState, newItem]);
  };

  const removeItem = (idItem: MenuItem["id"]) =>
    setOrder(orders.filter((orderItem) => orderItem.id !== idItem));

  const saveOrder = () => {
    setTip(0);
    setOrder([]);
  };
  return {
    orders,
    tips,
    setTip,
    addItem,
    removeItem,
    saveOrder,
  };
}
