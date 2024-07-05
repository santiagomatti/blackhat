import { Item } from '../Item/Item'

export const ItemList = ({ productos }) => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {productos.map((p) =>
                        <Item key={p.id}
                            id={p.id}
                            name={p.name}
                            img={p.img}
                            price={p.price} />)}
                </div>
            </div>
        </section>
    )
}