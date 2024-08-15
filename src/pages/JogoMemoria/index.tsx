import { useEffect, useState } from "react";
import { geradorDeCarta } from "../../components/JogoDaMemoria/jogoMemoria.Config";
import { Tabuleiro } from "../../components/JogoDaMemoria/Tabuleiro";
import style from "./JogoMemoria.module.scss";
import Seletor from "../../components/Seletor";
import { Embaralhar } from "../../utils";
import { MenuSecundario } from "../../components/MenuSecundario";
import {  MAX_CARTAS_VIRADAS } from "../../constants/jogoDaMemoriaConstants";


export const JogoMemoria = () => {
    const [baralho, setBaralho] = useState<Array<any>>([])
    const [cartasViradas, setCartasViradas] = useState<Array<number>>([])
    const [cartasAcertadas, setCartasAcertadas] = useState<Array<number>>([])
    const [jogoiniciado, setJogoIniciado] = useState(false);
    const [dificuldade, setDificuldade] = useState("");
    const [showMenu, setShowMenu] = useState(true);
    
   
    useEffect(() => {
        iniciarJogo()
    }, [dificuldade]);

    useEffect(() => {
        fimDeJogo()
    }, [cartasAcertadas]);
    

    const iniciarJogo = async () => {
        if(dificuldade){

            setBaralho(await Embaralhar(geradorDeCarta(dificuldade)));
            setJogoIniciado(true);
            setShowMenu(false);
        }


       }

    const fimDeJogo = () : void => {
        if (cartasAcertadas.length === baralho.length && jogoiniciado) {
            console.log("Você ganhou!!!!");
            setTimeout(() => {
                resetarJogo()
            }, 1000)
        }
    };
    
    const handleShowMenuChange = (status : boolean) : void => {
        setShowMenu(status)
    }

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

        if (cartasViradas.includes(id) || cartasViradas.length === MAX_CARTAS_VIRADAS || cartasAcertadas.includes(id)) {
            return;
        }

        fliparCarta(id);

        const newCartasViradas = [...cartasViradas, id];
        setCartasViradas([...cartasViradas, id]);


        if (newCartasViradas.length === MAX_CARTAS_VIRADAS) {
            const [primeiraCarta, segundaCarta] = newCartasViradas;
            const [ primeiraCartaConteudo, segundaCartaConteudo] = [encontrarCarta(primeiraCarta).conteudo, encontrarCarta(segundaCarta).conteudo]

            if (primeiraCartaConteudo === segundaCartaConteudo) {
                setCartasAcertadas(() => [...cartasAcertadas, primeiraCarta, segundaCarta]);
            
        }else{
            setTimeout(() => fliparCarta(undefined, false), 1000);
        }
            
            setTimeout(() => setCartasViradas([]), 1000);
        }

    }
    return (
    
        <div className={style.jogoInicio}>
            {
            showMenu 
            ? 
            <MenuSecundario jogo="Jogo da Memória" fecharMenu={handleShowMenuChange} regras={""}/> 
            :
            dificuldade === "" ?
            <Seletor setDificuldade={setDificuldade}></Seletor> 
            :
            <Tabuleiro onCardClick={onCardClick} baralho={baralho}></Tabuleiro>
        }
       
        </div>
    )
}