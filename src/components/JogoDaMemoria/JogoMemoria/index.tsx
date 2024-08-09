import { useEffect, useState } from "react";
import { Tabuleiro } from "../Tabuleiro"
import "./jogoMemoria.scss"
import Seletor from "../../Seletor";
import { Embaralhar } from "../../../utils";
import { Menu } from "../../Menu";
import { Dificuldade } from "../../../enums/Dificuldade-enum";



const geradorDeCarta = (dificuldade: string) => {
    let quantidadeCartas: number;
    switch(dificuldade){
        case "FACIL":
            quantidadeCartas = Dificuldade.FACIL; 
            break;
        case "MEDIO":
            quantidadeCartas = Dificuldade.MEDIO;
            break;
        case "DIFICIL":
            quantidadeCartas = Dificuldade.DIFICIL;
            break;
        default:
            quantidadeCartas = Dificuldade.MEDIO;
            break;
    }

    const cartas = []
    for(let i = 0; i < quantidadeCartas;i++){
        const carta = {id: 2 * i + 1, conteudo: `${String.fromCharCode(i+65)}`, cartaVirada: false}
        const cartaRepetida = {id: 2 * i + 2, conteudo: `${String.fromCharCode(i+65)}`, cartaVirada: false}
        cartas.push(carta);
        cartas.push(cartaRepetida)
    }
    return cartas;
}


export const JogoMemoria = () => {
    const [baralho, setBaralho] = useState<Array<any>>([])
    const [cartasViradas, setCartasViradas] = useState<Array<number>>([])
    const [cartasAcertadas, setCartasAcertadas] = useState<Array<number>>([])
    const [jogoiniciado, setJogoIniciado] = useState(false);
    const [dificuldade, setDificuldade] = useState("");


    
    useEffect(() => {
        const iniciarJogo = async () => {
            if(dificuldade){
                const deckEmbaralhado = await Embaralhar(geradorDeCarta(dificuldade));
                setBaralho(deckEmbaralhado);
                setJogoIniciado(true)
            }
           }

        iniciarJogo()

    }, [dificuldade])

    useEffect(() => {
            fimDeJogo()
    }, [cartasAcertadas, baralho.length])
    

    const fliparCarta =  async (id?: number, estado?: boolean) => {
        console.log(dificuldade)
        setBaralho(prevBaralho => prevBaralho.map(c => {
            if (cartasAcertadas.includes(c.id)) return c
            if (id !== undefined) return c.id === id ? { ...c, cartaVirada: !c.cartaVirada } : c
            else if (estado !== undefined) return { ...c, cartaVirada: estado }
            return c
        }
        ));
    }

    const resetarJogo = async ()  => {
        await fliparCarta(undefined, false);
        setCartasAcertadas([]);
        setCartasViradas([]);
        setDificuldade("");
        const deckEmbaralhado = await Embaralhar(geradorDeCarta(dificuldade))
        setBaralho(deckEmbaralhado)
       
    }

    const fimDeJogo = () : void => {
        if (cartasAcertadas.length === baralho.length && jogoiniciado) {
            console.log("Você ganhou!!!!");
            setTimeout(() => {
                resetarJogo()
            }, 1000)
        }
    };

    const encontrarCarta = (cartaId : number) => {
        return baralho.find(c => c.id === cartaId)
    }

    const onCardClick = (id: number) : void => {

        if (cartasViradas.includes(id) || cartasViradas.length === 2 || cartasAcertadas.includes(id)) {
            return;
        }

        fliparCarta(id);

        const newCartasViradas = [...cartasViradas, id];
        setCartasViradas([...cartasViradas, id]);


        if (newCartasViradas.length === 2) {
            const [primeiraCarta, segundaCarta] = newCartasViradas;
            const primeiraCartaConteudo = encontrarCarta(primeiraCarta).conteudo
            const segundaCartaConteudo = encontrarCarta(segundaCarta).conteudo

            if (primeiraCartaConteudo === segundaCartaConteudo) {

                setCartasAcertadas(() => [...cartasAcertadas, primeiraCarta, segundaCarta]);
            
        }
            else {
                setTimeout(() => fliparCarta(undefined, false), 1000)
            }

            setTimeout(() => setCartasViradas([]), 1000);
        }

    }
    return (
       
        <div className="jogo-inicio">
            {
            dificuldade === "" ? <Seletor setDificuldade={setDificuldade}></Seletor> :
            <Tabuleiro onCardClick={onCardClick} baralho={baralho}></Tabuleiro>
        }

        {/* <Menu></Menu> */}
        </div>
    )
}