import style from "./Obstaculo.module.scss"

interface ObstaculoProps{
    side : "direita" | "esquerda"
}
export const Obstaculo = ({side}: ObstaculoProps) => {
    return(
        <img className={`${style.obstaculo} ${style[side]}`} src="src/assets/obstaculo.png" alt="pedra" />
    )
}