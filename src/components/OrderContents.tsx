import { formarCurrency } from "../helpers/formatCurrency";
import { OrderContentsProps } from "../types";

const OrderContents = ({ orders, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10  overflow-auto max-h-80">
        {orders.map((orderItem) => {
          return (
            <div
              key={orderItem.id}
              className="flex justify-between items-center border-t  border-gray-300 py-2 last-of-type:border-b px-2"
            >
              <div>
                <p className="text-lg">
                  {orderItem.name} - {formarCurrency(orderItem.price)}
                </p>
                <p className="font-black">
                  Cantidad: {orderItem.quantity} -{" "}
                  {formarCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 w-8 h-8 rounded-full text-white"
                onClick={() => removeItem(orderItem.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderContents;
