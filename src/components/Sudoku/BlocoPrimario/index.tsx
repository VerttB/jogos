import style from './BlocoPrimario.module.scss'
import { BlocoSecundario } from '../BlocoSecundario'
import { gerarMatriz } from '../Sudoku.config';

interface BlocoPrimarioProps{
    valores : Array<number>
}

export const BlocoPrimario = ({valores}:BlocoPrimarioProps ) => {
    const blocosSecundario = Array(9).fill('');
    console.log(valores)
    return(
        <div className={style.blocoPrimario}>
            {blocosSecundario.map((_,i) => <BlocoSecundario key={i} 
                                valor={valores[i]} ></BlocoSecundario>)}
        </div>
    )
}