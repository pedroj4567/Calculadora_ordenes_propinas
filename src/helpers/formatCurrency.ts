export const formarCurrency = (quantity: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(quantity);
};
