import { Card } from "../Card/Card";
import "./tabuleiro.scss"
import React from "react";

interface CartaDados{
    id: number
    conteudo: string,
    cartaVirada: boolean,
}

interface TabuleiroProps{
    baralho: CartaDados[],
 
    onCardClick: (id:number) => void;
}

export const Tabuleiro: React.FC<TabuleiroProps> = ({ baralho, onCardClick }) => {
    const tamanhoCartas = {"--tamanho" : Math.floor(Math.sqrt(baralho.length))} as React.CSSProperties
    console.log(tamanhoCartas)
    return(
        <div className="tabuleiro" style={tamanhoCartas}>
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