import { useEffect, useState, createContext } from "react";
import { Tabuleiro } from "../Tabuleiro";
import style from "./JogoMemoria.module.scss";
import Seletor from "../../Seletor";
import { Embaralhar } from "../../../utils";
import { DificuldadeMemoria } from "../../../enums/Dificuldade-enum";
import { MenuSecundario } from "../../MenuSecundario";


const selecionaDificuldade = (dificuldade : string) => {
    switch(dificuldade){
        case "FACIL":
            return DificuldadeMemoria.FACIL; 
            
        case "MEDIO":
            return DificuldadeMemoria.MEDIO;
            
        case "DIFICIL":
            return DificuldadeMemoria.DIFICIL;
            
        default:
            return DificuldadeMemoria.MEDIO;
         
}
}

const geradorDeCarta = (dificuldade: string) => {
    let quantidadeCartas: number = selecionaDificuldade(dificuldade)

    const cartas = []
    for(let i = 0; i < quantidadeCartas;i++){
        for( let j = 1; j<3;j++){
            const carta = {id: 2 * i + j, conteudo: `${String.fromCharCode(i+65)}`, cartaVirada: false}
            cartas.push(carta);
        }
    }

    return cartas;
}


export const JogoMemoria = () => {
    const [baralho, setBaralho] = useState<Array<any>>([])
    const [cartasViradas, setCartasViradas] = useState<Array<number>>([])
    const [cartasAcertadas, setCartasAcertadas] = useState<Array<number>>([])
    const [jogoiniciado, setJogoIniciado] = useState(false);
    const [dificuldade, setDificuldade] = useState("");
    const [showMenu, setShowMenu] = useState(true);


    const iniciarJogo = async () => {
        if(dificuldade){
            const deckEmbaralhado = await Embaralhar(geradorDeCarta(dificuldade));
            setBaralho(deckEmbaralhado);
            setJogoIniciado(true);
            setShowMenu(false);
        }
       }
    
    const handleShowMenuChange = (status : boolean) : void => {
        setShowMenu(status)
    }

    useEffect(() => {
        iniciarJogo()
    }, [dificuldade])


    useEffect(() => {
        const fimDeJogo = () : void => {
            if (cartasAcertadas.length === baralho.length && jogoiniciado) {
                console.log("Você ganhou!!!!");
                setTimeout(() => {
                    resetarJogo()
                }, 1000)
            }
        };

            fimDeJogo()
    }, [cartasAcertadas, baralho.length])
    

    const fliparCarta =  async (id?: number, estado?: boolean) => {
        setBaralho(prevBaralho => prevBaralho.map(c => {
            if (cartasAcertadas.includes(c.id)) return c
            if (id !== undefined) return c.id === id ? { ...c, cartaVirada: !c.cartaVirada } : c
            else if (estado !== undefined) return { ...c, cartaVirada: estado }
            return c
        }
        ));
    }

    const resetarJogo = async ()  => {
        setShowMenu(true);
        await fliparCarta(undefined, false);
        setCartasAcertadas([]);
        setCartasViradas([]);
        setDificuldade("");
    }

  

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
       
        <div className={style.jogoInicio}>
            {
            showMenu 
            ? 
            <MenuSecundario fecharMenu={handleShowMenuChange} regras={""}/> 
            :
            dificuldade === "" ?
            <Seletor setDificuldade={setDificuldade}></Seletor> 
            :
            <Tabuleiro onCardClick={onCardClick} baralho={baralho}></Tabuleiro>
        }
       
        </div>
    )
}