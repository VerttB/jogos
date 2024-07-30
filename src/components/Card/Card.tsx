import "./Card.css"

interface Carta{
    id: number
    conteudo: string,
    cartaVirada: boolean,
    onCardClick: (id: number) => void,
}


export const Card: React.FC<Carta> = ({id, conteudo,cartaVirada, onCardClick}) => {
    return(
        <div onClick={() => onCardClick(id)} className={`carta ${cartaVirada ? 'cartaVirada disable' : '' }`} >

            <div className="conteudoFrente">{conteudo}</div>
            <div className="conteudoCosta">?</div>
        </div>
    )
}