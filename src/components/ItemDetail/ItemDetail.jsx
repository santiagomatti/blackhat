import { useState } from "react";
import { AddItemButton } from "../AddItemButton/AddItemButton";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

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
                            <ItemQuantitySelector stock={stock} quantity={quantity} onQuantityChange={handleQuantityChange} />
                            <AddItemButton id={id} quantity={quantity} name={name} price={price} stock={stock} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
