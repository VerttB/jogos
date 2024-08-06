import { Card } from "../Card";
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
    const tamanhoMultiplicador = (baralho.length <= 16 ? 1.4 
                                  :baralho.length <= 32 ? 1.8 : 2.3);
    console.log(tamanhoMultiplicador)
    console.log(baralho.length)
    const tamanhoCartas = {"--tamanho" : 100 /baralho.length * tamanhoMultiplicador} as React.CSSProperties
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