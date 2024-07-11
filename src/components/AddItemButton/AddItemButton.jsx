import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const AddItemButton = ({ id, quantity, name, price, stock }) => {
    const { cart } = useContext(CartContext);
    const { agregarAlCarrito } = useContext(CartContext);

    const handleClick = () => {
        if (quantity < 1) {
            alert("La cantidad no puede ser menor a 1");
        } else if (quantity > stock) {
            alert("La cantidad no puede ser mayor al stock");
        } else {
            const productoIndex = cart.findIndex((producto) => producto.id === id);
            if (productoIndex > -1) {
                const newQuantity = cart[productoIndex].quantity + quantity;
                if (newQuantity > stock) {
                    alert("La cantidad no puede ser mayor al stock");
                } else {
                    const newProduct = { id, quantity: newQuantity, name, price };
                    cart.splice(productoIndex, 1);
                    agregarAlCarrito(newProduct);
                    alert("Producto agregado al carrito");
                }
            } else {
                const producto = { id, quantity, name, price };
                agregarAlCarrito(producto);
                alert("Producto agregado al carrito");
            }
        }
    };

    return (
        <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleClick}>
            <i className="bi-cart-fill me-1"></i>
            Agregar al carrito
        </button>
    );
};