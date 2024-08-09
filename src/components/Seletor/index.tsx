import Dificuldade from "../Dificuldade";
import './Seletor.scss'
export default function Seletor({setDificuldade}:any){
    return(
        <div className="seletor">
            <h3 className="titulo">Escolha a Dificuldade</h3>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="facil"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="medio"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="dificil"></Dificuldade>
        </div>
    )
}