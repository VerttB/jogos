import style from './BlocoPrimario.module.scss'
import { BlocoSecundario } from '../BlocoSecundario'



export const BlocoPrimario = () => {
    const blocosSecundario = Array(9).fill('');
    return(
        <div className={style.blocoPrimario}>
            {blocosSecundario.map((_,i) => <BlocoSecundario key={i}></BlocoSecundario>)}
        </div>
    )
}