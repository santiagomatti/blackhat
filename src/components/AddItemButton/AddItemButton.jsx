import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const AddItemButton = ({ id, quantity, name, price, stock }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const handleClick = () => {
        if (quantity < 1) {
            alert("La cantidad no puede ser menor a 1");
        } else if (quantity > stock) {
            alert("La cantidad no puede ser mayor al stock");
        } else {
            const producto = { id, quantity, name, price};
            agregarAlCarrito(producto);
            alert("Producto agregado al carrito");
        }
    };

    return (
        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleClick}>
            <i className="bi-cart-fill me-1"></i>
            Agregar al carrito
        </button>
    );
};