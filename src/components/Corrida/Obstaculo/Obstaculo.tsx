import style from "./Obstaculo.module.scss"

interface ObstaculoProps{
    side : string,
    id: string
}
export const Obstaculo = ({side, id}: ObstaculoProps) => {
    return(
        <div className={`${style.obstaculo} ${style[side]}`} id={id}>
            <img src="src/assets/obstaculo.png" alt="src/assets/obstaculo.png" />
        </div>
    )
}