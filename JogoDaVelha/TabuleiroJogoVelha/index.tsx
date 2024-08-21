
import  style  from './TabuleiroJogoVelha.module.scss'

interface tabuleiroProps{
    
    areaClicada: string[]
    jogar : (id   : number) => void;
}
export default function TabuleiroJogoVelha({areaClicada, jogar } : tabuleiroProps){

    const divs = ([...Array(9)].map((_, i) => <div className={style.area} key={i} onClick={() => jogar(i)}>{areaClicada[i]}</div>));
   
    return(
        <div className={style.tabuleiroJogoVelha}>
            {divs.map(d => d)}
        </div>
    )
}