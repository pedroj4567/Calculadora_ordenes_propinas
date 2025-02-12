import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | {
      type: "add-item";
      payload: {
        item: MenuItem;
      };
    }
  | {
      type: "remove-item";
      payload: {
        idItem: MenuItem["id"];
      };
    }
  | {
      type: "place-order";
    }
  | {
      type: "add-tip";
      payload: {
        value: number;
      };
    };

export type OrderState = {
  orders: OrderItem[];
  tips: number;
};

export const initialState: OrderState = {
  orders: [],
  tips: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === "add-item") {
    const itemExists = state.orders.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let order: OrderItem[] = [];

    if (itemExists) {
      order = state.orders.map((orderItem) => {
        return orderItem.id === itemExists.id
          ? {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          : orderItem;
      });

      return {
        ...state,
        orders: order,
      };
    }

    const newItem: OrderItem = {
      ...action.payload.item,
      quantity: 1,
    };

    order = [...state.orders, newItem];

    return {
      ...state,
      orders: order,
    };
  }

  if (action.type === "remove-item") {
    const updatedOrders: OrderItem[] = state.orders.filter(
      (orderItem) => orderItem.id !== action.payload.idItem
    );
    return {
      ...state,
      orders: updatedOrders,
    };
  }

  if (action.type === "place-order") {
    return {
      ...state,
      orders: [],
      tips: 0,
    };
  }

  if (action.type === "add-tip") {
    return {
      ...state,
      tips: action.payload.value,
    };
  }

  return state;
};
