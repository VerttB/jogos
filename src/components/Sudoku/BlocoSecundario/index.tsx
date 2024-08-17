import style from './BlocoSecundario.module.scss';
interface BlocoSecundarioProps{
    valor:number,
}
export const BlocoSecundario = ({valor}:BlocoSecundarioProps) =>{
   
    return(
        <div className={style.blocoSecundario}>
            {valor}
        </div>
    )
}