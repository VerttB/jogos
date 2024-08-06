import Dificuldade from "../Dificuldade/Dificuldade";
import './Seletor.scss'
export default function Seletor({setDificuldade}:any){
    return(
        <div className="seletor">
            <Dificuldade setDificuldade={setDificuldade} dificuldade="facil"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="medio"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="dificil"></Dificuldade>
        </div>
    )
}