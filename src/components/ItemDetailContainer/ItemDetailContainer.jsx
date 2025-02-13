import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getItem } from '../../data/asyncmock';
import { useParams } from 'react-router-dom';
import { Error404 } from '../Error404/Error404';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getItem(id)
            .then(res => {
                setItem(res);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <main>
            {item ? (
                <ItemDetail id={item.id} name={item.name} description={item.description} img={item.img} price={item.price} stock={item.stock} />
            ) : (
                <Error404 />
            )}
        </main>
    );
}
