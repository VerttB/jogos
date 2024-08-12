import Button from "../../Button";
import './TabuleiroJogoVelha.scss'

export default function TabuleiroJogoVelha(){
    return(
        <div className='tabuleiroJogoVelha'>
            {[...Array(9)].map((_, i) => <Button key={i}></Button>)}
        </div>
    )
}