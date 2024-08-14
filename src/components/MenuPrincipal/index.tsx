import { Link } from "react-router-dom"
import { jogosPath } from "../../constants/jogosPath/jogosPath"
import  style from './MenuPrincipal.module.scss'

export default function MenuPrincipal(){
    return(
        <div className={style.menuPrincipal}>
            <h3>Escolha o jogo que deseja jogar</h3>
            <div className={style.jogos}>
            {jogosPath.map(jp => 
                <Link key={jp.nome} to={jp.caminho}>{jp.nome}</Link>
            )}
            </div>
        </div>
    )
}