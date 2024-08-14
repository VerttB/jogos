import Button from "../Button";
import style from './MenuSecundario.module.scss';
import { useNavigate} from "react-router-dom";
interface MenuSecundarioProps {
    fecharMenu : (status : boolean) => void;
    regras : string;
}

export const MenuSecundario: React.FC<MenuSecundarioProps> = ({ fecharMenu, regras}) => {
    const navegar = useNavigate();
    const menuPrincipal = () => {
        navegar('/');
    }

    return(
        <div className={style.menuSecundario}>
            <h3 className={style.titulo}>Menu</h3>
            <Button onClick={() => fecharMenu(false)}>Jogar</Button>
            <Button>{regras}</Button>
            <Button onClick={menuPrincipal}>Menu Principal</Button> 
        </div>
    )

}
