import { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getItem } from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getItem(id)
            .then(res => setItem(res))
            .catch(err => console.error(err));
    }, [id])

    return (
        <main>
            {item ? (
                <ItemDetail id={item.id} name={item.name} description={item.description} img={item.img} price={item.price} stock={item.stock} />
            ) : (
                <>Cargando...</>
            )}
        </main>
    )
}