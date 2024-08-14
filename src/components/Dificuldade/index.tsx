import style from './Dificuldade.module.scss'
interface Dificuldade{
    dificuldade: string,
    setDificuldade: (dificuldade:string) => void
}

export default function Dificuldade({setDificuldade,dificuldade}: Dificuldade){
    const dificuldadeUpperCase = dificuldade.toUpperCase();
   
    return(
        <button className={style.dificuldade} onClick={() => setDificuldade(dificuldadeUpperCase)}>
        {dificuldadeUpperCase}
        </button>
    )
}