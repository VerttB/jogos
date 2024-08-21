import style from './Personagem.module.scss'

interface sideProps{
    side : 'right' | 'left'
}
const HEAD = () => {
    return(
        <div className={style.head}>
           
        </div>
    )
}

const TORSO = () => {
    return(
        <div className={style.torso}>

        </div>
    )
}

const ARM = ({side} : sideProps) => {
    return(
        <div className={`${style.arm} ${style[side]}`}>

        </div>
    )
}

const LEG = ({side} :sideProps) => {
    return(
        <div className={`${style.leg} ${style[side]}`}>

        </div>
    )
}

interface personagemProps{
    tentativas:number
}

export const Personagem:React.FC<personagemProps> = ({tentativas}) => {
    


    return(
        <div className={style.personagem}>
        <HEAD></HEAD>
        <ARM side="right"></ARM>
        <TORSO></TORSO>
        <ARM side="left"></ARM>
        <LEG side='right'></LEG>
        <LEG side='left'></LEG>
       </div>
    )
}