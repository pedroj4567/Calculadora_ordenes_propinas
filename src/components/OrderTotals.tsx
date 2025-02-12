import { useCallback } from "react";
import { OrderTotalProps } from "../types";
import { formarCurrency } from "../helpers/formatCurrency";

export const OrderTotals = ({ orders, tips, dispatch }: OrderTotalProps) => {
  // USANDO USEMEMO -> RETORNA EL RESULTADO DE UNA FUNCION, QUE SE GUARDO EN MEMORIA
  //   const subTotalAmount = useMemo(
  //     () =>
  //       orders.reduce((acc, order) => {
  //         acc += order.quantity * order.price;
  //         return acc;
  //       }, 0),
  //     [orders]
  //   );

  //   const tipAmount = useMemo(
  //     () => subTotalAmount * tips,
  //     [tips, subTotalAmount]
  //   );

  //   const totalAmount = useMemo(
  //     () => subTotalAmount + tipAmount,
  //     [subTotalAmount, tipAmount]
  //   );

  //USANDO USECALLBACK -> RETORNA UNA FUNCION QUE SE HA GUARDADO EN MEMORIA O SE HA MEMOISADO
  const subTotalAmount = useCallback(
    () =>
      orders.reduce((acc, order) => {
        acc += order.quantity * order.price;
        return acc;
      }, 0),
    [orders]
  );

  const tipAmount = useCallback(
    () => subTotalAmount() * tips,
    [tips, subTotalAmount]
  );

  const totalAmount = useCallback(
    () => subTotalAmount() + tipAmount(),
    [subTotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total y Propinas:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-black">{formarCurrency(subTotalAmount())}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-black">{formarCurrency(tipAmount())}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-black">{formarCurrency(totalAmount())}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 disabled:cursor-not-allowed cursor-pointer"
        disabled={totalAmount() === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
};
