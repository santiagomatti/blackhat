import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={img} alt={name} />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: {id}</div>
                        <h1 className="display-5 fw-bolder">{name}</h1>
                        <div className="fs-5 mb-5">
                            <span>{price}</span>
                        </div>
                        <p className="lead">{description}</p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="number" defaultValue="1" min={1} max={stock} style={{ maxWidth: '3rem' }} />
                            {/* Esto se va a cambiar por el componente ItemCount */}
                            <ItemCount />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}