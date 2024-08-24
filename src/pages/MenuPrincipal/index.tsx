import { Link } from "react-router-dom"
import { jogosPath } from "../../constants/jogosPath"
import  style from './MenuPrincipal.module.scss'
import { Icone } from "../../components/Icone/Icone"

export default function MenuPrincipal(){
    
    const imagemStartPath = `public/assets/game_icons/`;
    return(
        <div className={style.menuPrincipal}>
            <h3 className={style.titulo}>Escolha o jogo que deseja jogar</h3>
            <div className={style.jogos}>
            {jogosPath.map(jp => 
                <Link className={style.link} key={jp.nome} to={jp.caminho}>
                    <Icone imagem={imagemStartPath + jp.nome.replace(/\s/g,'') + '.jpg'} titulo={jp.nome}>
                    </Icone>
                </Link>
            )}
            </div>
        </div>
    )
}