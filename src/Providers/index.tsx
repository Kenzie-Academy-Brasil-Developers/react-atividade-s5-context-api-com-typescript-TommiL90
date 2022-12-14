import { createContext, useContext, useState } from "react";
import { iCartProviderData, iChildren, iProduct } from "./types";


const CartContext = createContext<iCartProviderData>({} as iCartProviderData);

export const CartProvider = ({ children } : iChildren) => {
    const [cart, setCart] = useState([] as iProduct[]);
  
    const addProduct = (product : iProduct) => {
      setCart([...cart, product]);
    };
  
    const deleteProduct = (productToBeDeleted : iProduct) => {
      const newCart = cart.filter(
        (product : iProduct) => product.title !== productToBeDeleted.title
      );
      setCart(newCart);
    };
  
    return (
      <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => useContext(CartContext);