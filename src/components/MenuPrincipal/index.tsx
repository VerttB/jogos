import { Link } from "react-router-dom"
import { jogosPath } from "../../constants/jogosPath/jogosPath"
import './MenuPrincipal.scss'

export default function MenuPrincipal(){
    return(
        <div className="menuPrincipal">
            <h3>Escolha o jogo que deseja jogar</h3>
            <div className="jogos">
            {jogosPath.map(jp => 
                <Link to={jp.caminho}>{jp.nome}</Link>
            )}
            </div>
        </div>
    )
}