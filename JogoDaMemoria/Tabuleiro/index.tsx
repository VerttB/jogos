import { Card } from "../Card";
import style from "./tabuleiro.module.scss"
import React from "react";

type CartaDados = {
    id: number
    conteudo: string,
    cartaVirada: boolean,
    
}

type TabuleiroProps = {
    baralho: CartaDados[],
    onCardClick: (id:number) => void;
    jogoIniciado: boolean,
  
}

export const Tabuleiro: React.FC<TabuleiroProps> = ({ baralho, onCardClick , jogoIniciado}) => {
    const tamanhoMultiplicador = (baralho.length <= 16 ? 1.2
                                  :baralho.length <= 32 ? 2 : 2.6);

                                  
    const tamanhoCartas = {"--tamanho" : 100 /baralho.length * tamanhoMultiplicador} as React.CSSProperties

    return(
        <div className={style.tabuleiro} style={tamanhoCartas}>
            
            {baralho.map(b => 
                <Card key={b.id}
                conteudo={b.conteudo}
                cartaVirada={b.cartaVirada}
                onCardClick={() => jogoIniciado && onCardClick(b.id)}
                ></Card>
            )}
        </div>
    )
}