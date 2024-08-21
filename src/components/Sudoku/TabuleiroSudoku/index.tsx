import { BlocoPrimario } from '../BlocoPrimario'
import { criaMatriz } from '../config';
import style from './TabuleiroSudoku.module.scss'

export const TabuleiroSudoku = () =>{
    const blocosPrimarios = Array(9).fill('');
    const valores = criaMatriz();
    return(
        <div className={style.tabuleiro}>
            {blocosPrimarios.map((_ ,i)=> <BlocoPrimario key={i}
                                          valores={valores[i]}
                                          ></BlocoPrimario>)}
        </div>
    )
}