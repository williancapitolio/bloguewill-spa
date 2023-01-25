import logo from "../../images/LogoBN.png";
import "./Navbar.css";
export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título" />
                </div>
                <img src={logo} alt="Logo blogueWill" />
                <button>Entrar</button>
            </nav>
        </>
    );
}