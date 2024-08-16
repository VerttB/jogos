import { BlocoPrimario } from '../BlocoPrimario'
import { gerarMatriz } from '../Sudoku.config';
import style from './TabuleiroSudoku.module.scss'

export const TabuleiroSudoku = () =>{
    const blocosPrimarios = Array(9).fill('');
    const matriz = gerarMatriz();
    return(
        <div className={style.tabuleiro}>
            {blocosPrimarios.map((_ ,i)=> <BlocoPrimario key={i}
                                          valores={matriz.slice(i, (i + 9))}
                                          ></BlocoPrimario>)}
        </div>
    )
}