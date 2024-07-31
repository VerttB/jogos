import "./Card.scss"

interface Carta{
    id: number
    conteudo: string,
    cartaVirada: boolean,
    onCardClick: (id: number) => void,
}


export const Card: React.FC<Carta> = ({id, conteudo,cartaVirada, onCardClick}) => {
    return(
        <div onClick={() => onCardClick(id)} className={`carta ${cartaVirada ? 'cartaVirada' : '' }`} >

            <div className="conteudoFrente"><p>{conteudo}</p></div>
            <div className="conteudoCosta"><p>?</p></div>
        </div>
    )
}