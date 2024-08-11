import Dificuldade from "../Dificuldade";
import './Seletor.scss'

interface SeletorProps{
    setDificuldade : () => void
}
export default function Seletor({setDificuldade}:SeletorProps){
    return(
        <div className="seletor">
            <h3 className="titulo">Escolha a Dificuldade</h3>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="facil"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="medio"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="dificil"></Dificuldade>
        </div>
    )
}