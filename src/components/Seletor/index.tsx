import Button from "../Button";
import style from  './Seletor.module.scss'

interface SeletorProps{
    setDificuldade : React.Dispatch<React.SetStateAction<string>>;
}
export default function Seletor({setDificuldade}:SeletorProps){
    return(
        <div className={style.seletor}>
            <h3 className={style.titulo}>Escolha a Dificuldade</h3>
            <Button onClick={() => setDificuldade('FACIL') }>
                FÁCIL
            </Button>
            <Button onClick={() => setDificuldade('MEDIO') }>
                MÉDIO
            </Button>
            <Button onClick={() => setDificuldade('DIFICIL') }>
                DIFÍCIL
            </Button>
        </div>
    )
}