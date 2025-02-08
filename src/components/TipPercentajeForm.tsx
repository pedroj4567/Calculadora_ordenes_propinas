import { tipOptions } from "../data/db";
import { TipPercentajeFormProps } from "../types";

export const TipPercentajeForm = ({ setTip, tips }: TipPercentajeFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl py-2">Propina:</h3>

      <form>
        {tipOptions.map((option) => {
          return (
            <div className="flex gap-2" key={option.id}>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                type="radio"
                id={option.id}
                name="tip"
                value={option.value}
                onChange={(e) => setTip(+e.target.value)} //el signo de + al comienzo convierte el valor a string
                checked={option.value === tips}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};
