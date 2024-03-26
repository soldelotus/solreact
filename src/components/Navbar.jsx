import { Link } from "react-router-dom";
 
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <button className="botao">
                    Home
                </button>
            </Link>
            <Link to="/contact">
                <button className="botao">
                    Contato
                </button>
            </Link>
        </nav>
    )
}
 
export default Navbar
