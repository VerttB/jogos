import style from "./Obstaculo.module.scss"

interface ObstaculoProps{
    side : "direita" | "esquerda"
}
export const Obstaculo = ({side}: ObstaculoProps) => {
    return(
        <div className={`${style.obstaculo} ${style[side]}`}></div>
    )
}