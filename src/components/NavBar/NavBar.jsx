import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <NavLink to={'/'} className="navbar-brand">
                    <img className="img-sm" src="https://raw.githubusercontent.com/santiagomatti/react-js-preentregas/main/preentrega2matti/public/logo.png" alt="Logo" />
                    BlackHat
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'}>
                            <li className="nav-item">Inicio</li>
                        </NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to={'/category/Remeras'} className={({ isActive }) => isActive ? 'active dropdown-item' : 'dropdown-item'}>
                                    <li>Remeras</li>
                                </NavLink>
                                <NavLink to={'/category/Pantalones'} className={({ isActive }) => isActive ? 'active dropdown-item' : 'dropdown-item'}>
                                    <li>Pantalones</li>
                                </NavLink>
                                <NavLink to={'/category/Sweaters'} className={({ isActive }) => isActive ? 'active dropdown-item' : 'dropdown-item'}>
                                    <li>Sweaters</li>
                                </NavLink>
                                <NavLink to={'/category/Buzos'} className={({ isActive }) => isActive ? 'active dropdown-item' : 'dropdown-item'}>
                                    <li>Buzos</li>
                                </NavLink>

                            </ul>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}