import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const AddItemButton = ({ id, quantity, stock }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const handleClick = () => {
        if (quantity < 1) {
            alert("La cantidad no puede ser menor a 1");
        } else if (quantity > stock) {
            alert("La cantidad no puede ser mayor al stock");
        } else {
            // Agregar el producto al carrito
            const producto = { id, quantity };
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
