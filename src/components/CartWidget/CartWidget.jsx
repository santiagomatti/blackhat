export const CartWidget = () => {
    return (
        <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Carrito
                <span className="badge bg-dark text-white ms-1 rounded-pill">3</span>
            </button>
        </form>
    )
}