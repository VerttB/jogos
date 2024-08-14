import style from "./Card.module.scss"

interface Carta{
    id: number
    conteudo: string,
    cartaVirada: boolean,
    onCardClick: (id: number) => void,
}

export const Card: React.FC<Carta> = ({id, conteudo,cartaVirada, onCardClick}) => {
    return(
        <div onClick={() => onCardClick(id)} className={`${style.carta} ${cartaVirada ? style.cartaVirada : '' }`} >

            <div className={style.conteudoFrente}><p>{conteudo}</p></div>
            <div className={style.conteudoCosta}><p>?</p></div>
        </div>
    )
}