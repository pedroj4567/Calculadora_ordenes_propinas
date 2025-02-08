import { MenuItemsProps } from "../types";

const MenuItems = ({ item, addItem }: MenuItemsProps) => {
  return (
    <button
      className="border-2 rounded-lg border-teal-200 w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer"
      onClick={() => {
        addItem(item);
      }}
    >
      <p className="">{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
};

export default MenuItems;
