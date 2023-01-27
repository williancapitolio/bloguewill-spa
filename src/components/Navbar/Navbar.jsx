import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
//import "./Navbar.css";

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título" />
                </InputSpace>
                <ImageLogo src={logo} alt="Logo blogueWill" />
                <Button>Entrar</Button>
            </Nav>
        </>
    );
}