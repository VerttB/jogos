import { BlocoPrimario } from '../BlocoPrimario'
import style from './TabuleiroSudoku.module.scss'

export const TabuleiroSudoku = () =>{
    const blocosPrimarios = Array(9).fill('');
    return(
        <div className={style.tabuleiro}>
            {blocosPrimarios.map((_ ,i)=> <BlocoPrimario key={i}
                                          valores={[]}
                                          ></BlocoPrimario>)}
        </div>
    )
}