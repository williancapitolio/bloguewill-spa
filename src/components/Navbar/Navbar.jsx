import logo from "../../images/LogoBN.png";

export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i></i>
                    <input type="text" />
                </div>
                <img src={logo} alt="Logo blogueWill" />
                <button>Entrar</button>
            </nav>
        </>
    );
}