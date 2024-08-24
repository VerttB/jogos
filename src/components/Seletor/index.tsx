import { RemoverAssento } from "../../utils";
import Button from "../Button";
import style from  './Seletor.module.scss'

interface SeletorProps{
    setConfig : React.Dispatch<React.SetStateAction<string>>,
    config:string[],
    titulo:string,
    btnSize?: "small" | "normal" | "large",
    layout?: "column" | "row"
}
export default function Seletor({setConfig, config,titulo, btnSize = "normal", layout="column"}:SeletorProps){
    return(
        <div className={`${style.seletor}`}>
            <h3 className={style.titulo}>{titulo}</h3>
            <div className={`${style.seletores} ${style[layout]}`}>
            {config.map(c => 
            <Button size={btnSize} onClick={() => setConfig(RemoverAssento(c).join(''))}>
                {c}
            </Button>)}
            </div>
        </div>
    )
}