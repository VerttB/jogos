import Button from "../Button";
import './MenuSecundario.scss';


export const MenuSecundario = () => {

    const jogar = () => {
        console.log("Jogando");
    }

    const regras = () => {
        console.log("regras");
    }

    const menuPrincipal = () => {
        console.log("Menu Principal")
    }
    return(
        <div className="menuSecundario">
            <h3 className="titulo">Menu</h3>
            <Button onClick={jogar}>Jogar</Button>
            <Button onClick={regras}>Regras</Button>
            <Button onClick={menuPrincipal}>Menu Principal</Button>
        </div>
    )

}