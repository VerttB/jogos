
import style from './Desenho.module.scss'

interface sideProps{
    side : 'right' | 'left',
}

interface visibilityProps{
    hidden: boolean;
}

type sideAndVisibility = sideProps & visibilityProps
const HEAD = ({hidden}:visibilityProps) =>  {
    return(
        <div className={`${style.head} ${hidden ? style.hidden : ''}`}>
           
        </div>
    )
}

const TORSO = ({hidden}:visibilityProps) => {
    return(
        <div className={`${style.torso} ${hidden ? style.hidden : ''}`}>

        </div>
    )
}

const ARM = ({hidden,side} : sideAndVisibility) => {
    return(
        <div className={`${style.arm} ${style[side]} ${hidden ? style.hidden : ''}`}>

        </div>
    )
}

const LEG = ({hidden, side} :sideAndVisibility) => {
    return(
        <div className={`${style.leg} ${style[side]} ${hidden ? style.hidden : ''}`}>

        </div>
    )
}

const POLE_BASE = () => {
    return(
        <div className={style.poleBase}>
        </div>
    )
}

const POLE_BAR = () => {
    return(
        <div className={style.poleBar}></div>
    )
}

const POLE_TOP = () => {
    return(
        <div className={style.poleTop}></div>
    )
}

const HOOK = () => {
    return(
        <div className={style.hook}></div>
    )
}

interface personagemProps{
    tentativas:number
}

export const Desenho:React.FC<personagemProps> = ({tentativas}) => {
    


    return(
        <div className={style.desenho}>
        <div className={style.pole}>
            <POLE_TOP></POLE_TOP>
            <HOOK></HOOK>
            <POLE_BAR></POLE_BAR>
            <POLE_BASE></POLE_BASE>
        </div>
        <div className={style.personagem}>
        <HEAD hidden={!(tentativas < 6)}></HEAD>
        <TORSO hidden={!(tentativas < 5)}></TORSO>
        <ARM  hidden={!(tentativas < 4)} side="right"></ARM>
        <ARM hidden={!(tentativas < 3)} side="left"></ARM>
        <LEG hidden={!(tentativas < 2)} side='right'></LEG>
        <LEG hidden={!(tentativas < 1)} side='left'></LEG>
       </div>
       </div>
    )
}