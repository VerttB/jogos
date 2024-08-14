import Dificuldade from "../Dificuldade";
import style from  './Seletor.module.scss'

interface SeletorProps{
    setDificuldade : React.Dispatch<React.SetStateAction<string>>;
}
export default function Seletor({setDificuldade}:SeletorProps){
    return(
        <div className={style.seletor}>
            <h3 className={style.titulo}>Escolha a Dificuldade</h3>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="facil"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="medio"></Dificuldade>
            <Dificuldade setDificuldade={setDificuldade} dificuldade="dificil"></Dificuldade>
        </div>
    )
}