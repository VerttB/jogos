import style from "./Card.module.scss"

interface Carta{
    
    conteudo: string,
    cartaVirada: boolean,
    onCardClick: () => void,
}

export const Card: React.FC<Carta> = ({ conteudo,cartaVirada, onCardClick}) => {
    return(
        <div onClick={onCardClick} className={`${style.carta} ${cartaVirada ? style.cartaVirada : '' }`} >

            <div className={style.conteudoFrente}><p>{conteudo}</p></div>
            <div className={style.conteudoCosta}><p>?</p></div>
        </div>
    )
}