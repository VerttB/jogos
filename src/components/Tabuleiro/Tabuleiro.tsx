import { Card } from "../Card/Card";
import "./tabuleiro.scss"

interface CartaDados{
    id: number
    conteudo: string,
    cartaVirada: boolean,
}

interface TabuleiroProps{
    baralho: CartaDados[]
    onCardClick: (id:number) => void;
}

export const Tabuleiro: React.FC<TabuleiroProps> = ({ baralho, onCardClick }) => {

    return(
        <div className="tabuleiro">
            {baralho.map(b => 
                <Card key={b.id}
                id={b.id}
                conteudo={b.conteudo}
                cartaVirada={b.cartaVirada}
                onCardClick={onCardClick}
                ></Card>
            )}
        </div>
    )
}