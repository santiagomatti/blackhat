import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto]);
    };

    const eliminarDelCarrito = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        alert('Producto eliminado del carrito');
    };

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito }}>
            {children}
        </CartContext.Provider>
    );
};