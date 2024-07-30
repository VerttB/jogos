import { useEffect, useState } from "react";
import { Tabuleiro } from "../Tabuleiro/Tabuleiro"
import "./jogoMemoria.css"

const cartasInicio = [
    {id: 1, conteudo: 'A', cartaVirada: false},
    {id: 2, conteudo: 'A', cartaVirada: false},
    {id: 3, conteudo: 'B', cartaVirada: false},
    {id: 4, conteudo: 'B', cartaVirada: false},
    {id: 5, conteudo: 'C', cartaVirada: false},
    {id: 6, conteudo: 'C', cartaVirada: false},
    {id: 7, conteudo: 'D', cartaVirada: false},
    {id: 8, conteudo: 'D', cartaVirada: false},
    {id: 9, conteudo: 'E', cartaVirada: false},
    {id: 10, conteudo: 'E', cartaVirada: false},
    {id: 11, conteudo: 'F', cartaVirada: false},
    {id: 12, conteudo: 'F', cartaVirada: false}
]


const embaralhar = (deck : Array<any>) : Array<any> => {
    for (let i = deck.length -1 ; i > 0; i--) {
        const j : number = Math.floor(Math.random() * i);
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
}


export const JogoMemoria = () => {
    const [baralho, setBaralho] = useState(Array<any>)
    const [cartasViradas, setCartasViradas] = useState(Array<number>)
    const [cartasAcertadas, setCartasAcertadas] = useState(Array<number>)

    useEffect(() =>{
        setBaralho(embaralhar(cartasInicio))
    },[])

    
    const fliparCarta = (id?:number, estado? : boolean) => {
        setBaralho(prevBaralho => prevBaralho.map(c =>
            {

                if(id !== undefined) return c.id === id ? {...c, cartaVirada : !c.cartaVirada } : c 
                else if(c.cartaVirada === estado) return {...c, cartaVirada : !c.cartaVirada }


                
                return c
        }
           
        )
        );
    }

    const onCardClick = (id:number) => {

        if (cartasViradas.includes(id) || cartasViradas.length === 2) {
            return;
        }

        fliparCarta(id);

        const newCartasViradas = [...cartasViradas, id];
        setCartasViradas(newCartasViradas);
        console.log(baralho);

        if(newCartasViradas.length === 2){
            const [primeiraCarta, segundaCarta] = newCartasViradas;
            const primeiraCartaConteudo = baralho.find(c => c.id === primeiraCarta)?.conteudo
            const segundaCartaConteudo = baralho.find(c => c.id === segundaCarta)?.conteudo
            console.log(primeiraCartaConteudo,'-', segundaCartaConteudo);
            
            if(primeiraCartaConteudo === segundaCartaConteudo){
                console.log("Você fez ponto!!")
                const newCartasAcertadas = [...cartasAcertadas, primeiraCarta, segundaCarta]
                setCartasAcertadas(newCartasAcertadas)
                setBaralho(prevBaralho => prevBaralho.map(c => 
                    c.id === primeiraCarta || c.id === segundaCarta?{...c, cartaVirada : true} : c
                )

            );
            }
            else{
                setTimeout(() => fliparCarta(undefined,true), 1500)
                
            }

            console.log(baralho)
          
            setTimeout(() => setCartasViradas([]), 1000);
        }
       
    }
    return(
        <div className="jogo-inicio">
           <Tabuleiro onCardClick={onCardClick} baralho={baralho}></Tabuleiro>
        </div>
    )
}