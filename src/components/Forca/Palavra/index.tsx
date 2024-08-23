import style from './Palavra.module.scss';
interface palavraProps{
    palavra:string[]
}
export const Palavra:React.FC<palavraProps> = ({palavra}) => {

    return (
       <div className={style.palavra}>
            {palavra.map((p,i) => 

            <span key={i} className={style.bar}>
                <span className={style.letra}>{p}</span>
            </span>)
            }
       </div>
    );
}