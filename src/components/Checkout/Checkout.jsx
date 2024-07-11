import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";

import '../../styles/checkout.css';

export const Checkout = () => {
    const { cart, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext);

    const totalCarrito = () => {
        let total = 0;
        cart.forEach((producto) => {
            total += producto.price * producto.quantity;
        });
        return total;
    };

    const cantidad = () => {
        let cantidad = 0;
        cart.forEach((producto) => {
            cantidad += producto.quantity;
        });
        return cantidad;
    };

    const validarNombreApellido = (nombre) => /^[a-zA-Z\s]+$/.test(nombre);
    const validarTelefono = (telefono) => /^[0-9]+$/.test(telefono);
    const validarEmail = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    const finalizarCompra = async (event) => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email1 = document.getElementById('email1').value.trim();
        const email2 = document.getElementById('email2').value.trim();

        if (!firstName) {
            alert('Por favor ingresa tu nombre.');
        } else if (!lastName) {
            alert('Por favor ingresa tu apellido.');
        } else if (!validarNombreApellido(firstName)) {
            alert('El nombre solo debe contener letras.');
        } else if (!validarNombreApellido(lastName)) {
            alert('El apellido solo debe contener letras.');
        } else if (!phone) {
            alert('Por favor ingresa tu teléfono.');
        } else if (!validarTelefono(phone)) {
            alert('El teléfono solo debe contener números.');
        } else if (!email1) {
            alert('Por favor ingresa tu correo electrónico.');
        } else if (!validarEmail(email1)) {
            alert('El formato del correo electrónico no es válido.');
        } else if (!email2) {
            alert('Por favor repite tu correo electrónico.');
        } else if (email1 !== email2) {
            alert('Los correos electrónicos no coinciden.');
        } else {
            const data = {
                buyer: {
                    nombre: `${firstName} ${lastName}`,
                    telefono: phone,
                    mail: email1,
                },
                items: cart,
                total: totalCarrito()
            };

            const orderCollection = collection(db, 'orders');
            const docRef = await addDoc(orderCollection, data);

            alert('Numro de orden: ' + docRef.id);
            
            vaciarCarrito();

            window.location.href = '/';
        }
    };

    if (cart.length === 0) {
        return (
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">El carrito está vacío</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Por favor, agrega al menos un producto al carrito.</p>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <>
                <div className="container">
                    <main className="py-5">
                        <div className="row g-5">
                            <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span>Carrito</span>
                                    <span className="badge bg-dark rounded-pill">{cantidad()}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    {cart.map((producto, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 className="my-0">{producto.name}</h6>
                                                <small className="text-body-secondary">Cantidad: {producto.quantity}</small>
                                            </div>
                                            <span className="text-body-secondary">${producto.price * producto.quantity}</span>
                                            <button className="btn btn-outline-danger btn-sm ms-2" onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                                        </li>
                                    ))}

                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total:</span>
                                        <strong>${totalCarrito()}</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-7 col-lg-8">
                                <h4 className="mb-3">Datos</h4>
                                <form className="needs-validation" noValidate onSubmit={finalizarCompra}>
                                    <div className="row g-3">

                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" className="form-label">
                                                Nombre
                                            </label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" required />
                                            <div className="invalid-feedback">Por favor ingresa tu nombre.</div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="lastName" className="form-label">
                                                Apellido
                                            </label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" required />
                                            <div className="invalid-feedback">Por favor ingresa tu apellido.</div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="phone" className="form-label">
                                                Teléfono
                                            </label>
                                            <input type="tel" className="form-control" id="phone" placeholder="123456789" required />
                                            <div className="invalid-feedback">Por favor ingresa un teléfono válido.</div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="email1" className="form-label">
                                                Email
                                            </label>
                                            <input type="email" className="form-control" id="email1" placeholder="you@example.com" required />
                                            <div className="invalid-feedback">Por favor ingresa un correo válido.</div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="email2" className="form-label">
                                                Email <span className="text-body-secondary">(Repetir)</span>
                                            </label>
                                            <input type="email" className="form-control" id="email2" placeholder="you@example.com" required />
                                            <div className="invalid-feedback">Los correos electrónicos deben coincidir.</div>
                                        </div>

                                    </div>
                                    <button className="mt-5 w-100 btn btn-outline-dark btn-lg" type="submit">
                                        Realizar Compra
                                    </button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        );
    }
};
