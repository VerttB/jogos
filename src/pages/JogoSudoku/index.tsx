
import { TabuleiroSudoku } from '../../components/Sudoku/TabuleiroSudoku';
import style from './JogoSudoku.module.scss'
export const JogoSudoku = () =>{
    return(
        <div className={style.jogoSudoku}>
           <TabuleiroSudoku></TabuleiroSudoku>
        </div>
    )
}