import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const cantidad = () => {
        let cantidad = 0;
        cart.forEach((producto) => {
            cantidad += producto.quantity;
        });
        return cantidad;
    };

    return (
        <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cantidad()}
                </span>
            </button>
        </form>
    );
};
