import Link from "../Link";
import "./Header.css";

const Header = ({image}) => {
    return (
        <>
            <div className="main-container">
                <header className="main-navbar">
                    <img className="logo"
                        src={image}
                        alt="Logo de un atardecer"
                    />
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <Link isActive={true}>Inicio</Link>
                            </li>
                            <li>
                                <Link>Países</Link>
                            </li>
                            <li>
                                <Link>Continentes</Link>
                            </li>
                            <li>
                                <Link type="secondary">Inspírame</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header;