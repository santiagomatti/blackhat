export const listadoProductos = [
    {
        id: 1,
        category: "Remeras",
        name: "Remera Urbana",
        description: "Remera de algodón con estampa de la ciudad de Buenos Aires",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/remera-urbana.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 2,
        category: "Remeras",
        name: "Remera de Futbol",
        description: "Remera de futbol con estampa de la selección Argentina",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/remera-futbol.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 3,
        category: "Remeras",
        name: "Remera de Rock",
        description: "Remera de algodón con estampa de banda de rock",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/remera-rock.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 4,
        category: "Pantalones",
        name: "Pantalon de Vestir",
        description: "Pantalon de vestir de algodón",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/pantalon-vestir.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 5,
        category: "Pantalones",
        name: "Pantalon de Jean",
        description: "Pantalon de jean con roturas",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/pantalon-jean.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 6,
        category: "Pantalones",
        name: "Pantalon de Gabardina",
        description: "Pantalon de gabardina color beige",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/pantalon-gabardina.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 7,
        category: "Sweaters",
        name: "Sweater de Lana",
        description: "Sweater de lana color gris",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/sweater-lana.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 8,
        category: "Sweaters",
        name: "Sweater de Algodón",
        description: "Sweater de algodón color azul",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/sweater-algodon.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 9,
        category: "Sweaters",
        name: "Sweater de Hilo",
        description: "Sweater de hilo color blanco",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/sweater-hilo.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 10,
        category: "Buzos",
        name: "Buzo de Algodón",
        description: "Buzo de algodón color marron",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/buzo-algodon.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 11,
        category: "Buzos",
        name: "Buzo de Lana",
        description: "Buzo de lana color gris",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/buzo-lana.jpg",
        price: 45999,
        stock: 2
    },
    {
        id: 12,
        category: "Buzos",
        name: "Buzo de Gabardina",
        description: "Buzo de gabardina",
        img: "https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/img/buzo-gabardina.jpg",
        price: 45999,
        stock: 2
    }
]

export const getProducts = (idCategory) => {
    const listado = idCategory ? listadoProductos.filter(unProducto => unProducto.category === idCategory) : listadoProductos

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            listado.length > 0 ?
                resolve(listado)
                :
                reject("No hay datos")
        }
        )
    })
}

export const getItem = (id) => {
    const item = listadoProductos.find(unProducto => unProducto.id === parseInt(id))

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            item ?
                resolve(item)
                :
                reject("No hay datos")
        }
        )
    })
}