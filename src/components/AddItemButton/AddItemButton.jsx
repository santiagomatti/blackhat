import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Swal from 'sweetalert2';

export const AddItemButton = ({ id, quantity, name, price, stock }) => {
    const { cart } = useContext(CartContext);
    const { agregarAlCarrito } = useContext(CartContext);

    const handleClick = () => {
        if (quantity < 1) {
            Swal.fire("Error", "La cantidad no puede ser menor a 1", "error")
        } else if (quantity > stock) {
            Swal.fire("Error", "La cantidad no puede ser mayor al stock", "error")
        } else {
            const productoIndex = cart.findIndex((producto) => producto.id === id);
            if (productoIndex > -1) {
                const newQuantity = cart[productoIndex].quantity + quantity;
                if (newQuantity > stock) {
                    Swal.fire("Error", "La cantidad no puede ser mayor al stock", "error")
                } else {
                    const newProduct = { id, quantity: newQuantity, name, price };
                    cart.splice(productoIndex, 1);
                    agregarAlCarrito(newProduct);
                    Swal.fire("Éxito", "Producto agregado al carrito", "success")
                }
            } else {
                const producto = { id, quantity, name, price };
                agregarAlCarrito(producto);
                Swal.fire("Éxito", "Producto agregado al carrito", "success")
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