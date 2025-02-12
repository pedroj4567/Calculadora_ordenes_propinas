import { useReducer } from "react";

import { menuItems } from "./data/db";
import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentajeForm } from "./components/TipPercentajeForm";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className=" bg-teal-400 py-5 ">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        {/* Menu container */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className=" space-y-3 mt-10 ">
            {menuItems.map((item) => {
              return (
                <MenuItems key={item.id} item={item} dispatch={dispatch} />
              );
            })}
          </div>
        </div>

        {/* Consumo container */}
        <div className=" border border-dashed border-slate-500 p-5 rounded-lg space-y-10">
          {state.orders.length ? (
            <>
              <OrderContents orders={state.orders} dispatch={dispatch} />
              <TipPercentajeForm dispatch={dispatch} tips={state.tips} />
              <OrderTotals
                orders={state.orders}
                tips={state.tips}
                dispatch={dispatch}
              />
            </>
          ) : (
            <>
              <p className="text-center text-red-700 bg-red-200 rounded-2xl w-1/2 mx-auto mt-4">
                {" "}
                La orden esta vacia!
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
