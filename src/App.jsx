import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Error404 } from './components/Error404/Error404'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )

}

export default App