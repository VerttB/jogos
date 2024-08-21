import style from './Tecla.module.scss';
interface teclaProps{
    onClick: (e:any) => void,
    letra: string,
}

export const Tecla = ({onClick, letra}: teclaProps) => {
    
    return(
        <button className={style.tecla}  onClick={onClick}>{letra}</button>
    )
}