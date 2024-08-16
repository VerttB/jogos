import { Palavra } from "../../components/Forca/Palavra"
import { Personagem } from "../../components/Forca/Personagem"
import style from './JogoDaForca.module.scss';

export const JogoDaForca = () => {

    return(
        <div className={style.jogoDaForca}>
        <Personagem></Personagem>
        <Palavra></Palavra>
        </div>
    )
}