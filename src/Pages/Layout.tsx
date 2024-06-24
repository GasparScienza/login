import { Link, Outlet} from "react-router-dom"

export const Layout = () => {
    return ( 
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/signin"> Iniciar Sesion </Link>
                <Link to="/signup"> Registrarse </Link>
            </header>
            <hr/>
            <Outlet/>
        </div>
    )

}