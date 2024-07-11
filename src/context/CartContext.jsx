import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto]);
    };

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    );
};