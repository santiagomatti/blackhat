import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getProducts } from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        getProducts(idCategory)
            .then(res => setProductos(res))
            .catch(err => console.error(err))
    }, [idCategory])

    return (
        <main>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">{idCategory ? <>{idCategory}</> : <>Página principal</>}</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Catálogo</p>
                    </div>
                </div>
            </header>
            {productos ? <ItemList productos={productos} /> : <>Cargando...</>}
        </main>
    )
}