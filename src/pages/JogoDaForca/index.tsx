import { useEffect, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Desenho} from "../../components/Forca/Personagem/Desenho"
import style from './JogoDaForca.module.scss';
import { Tecla } from "../../components/Forca/Tecla";
import { alfabetoForca, forcaPalavras, MAX_TRIES } from "../../constants/forcaPalavras";
import { MenuSecundario } from "../../components/MenuSecundario";
import { Dialog } from "../../components/Dialog/Dialog";
import { RemoverAssento } from "../../utils";
import Seletor from "../../components/Seletor";


function escolhePalavra(tema : string){
    const palavras = forcaPalavras[tema]
    const random = Math.floor(Math.random() * palavras.length);
    return palavras[random]
}


export const JogoDaForca = () => {
    const [secretWord, setSecretWord] = useState([""]);
    const [guessedWord, setGuessedWord] = useState([""]);
    const [showMenu, setShowMenu] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const [mensagem, setMensagem] = useState("")
    const [tries, setTries] = useState(MAX_TRIES);
    const [tema, setTema] = useState("");
    const alfabeto:string[] = alfabetoForca

   

  
 

    const iniciarJogo = () => {
        setShowDialog(false);
        setSecretWord(RemoverAssento(escolhePalavra(tema).toUpperCase()));
        setTries(MAX_TRIES);

    }

    const isGuessRight = (chute: string) => {
      
       const word = guessedWord.map((w,i) => {
            if(chute === secretWord[i]) return chute;
            else if(w == ' ') {
                return ' ';
            }
            else return w;
        });
        if(!word.includes(chute)){
            setTries(t => t - 1);

     
        }
    

    setGuessedWord([...word]);

    }

    useEffect(() => {
        const verificaVitoria = () => {
            if(guessedWord.join('') === secretWord.join('')){
                setMensagem("Parabéns, você ganhou!!!");
                setShowDialog(true);
               
            }
        
            else if(tries === 0){
                setMensagem(`Quase lá! A palavra correta era ${secretWord.join('')} . Continue tentando, você vai conseguir!`)
                setShowDialog(true)
            }

        }
        verificaVitoria()
    },[guessedWord, tries])

    useEffect(() => {
        setGuessedWord(Array(secretWord.length).fill(' '))
    },[secretWord])
   

    const onLetterClick = (letra:string) => {
        isGuessRight(letra)
    }

    const handleShowMenu = (status : boolean) => {
        setShowMenu(status);
        setTema("");
        setShowDialog(false)
    }

    useEffect(() => {
        if(tema !== "") {
            iniciarJogo()
        }
      
    }, [tema])

    return(
        <div className={style.jogoDaForca}>
        {showMenu
        ?
        <MenuSecundario jogo="Jogo da Forca" regras=""   fecharMenu={handleShowMenu}/> 
        :
        tema === "" 
        ? 
        <Seletor config={Object.keys(forcaPalavras)} 
                 setConfig={setTema}
                 btnSize="small"
                 titulo={"Escolha o tema"}
                 layout="row"></Seletor>
        :
        <>
        <Desenho tentativas={tries}></Desenho>
        <Palavra palavra={guessedWord}></Palavra>
        <div className={style.letras}>
        {alfabeto.map(a => <Tecla key={a} secretWord={secretWord} onClick={onLetterClick} letra={a}></Tecla>)}
        </div>
        <Dialog win={true} clickBackToMenu={() => handleShowMenu(true)} clickPlayAgain={iniciarJogo} open={showDialog} mensagem={mensagem} ></Dialog>
        </>
        
        }
        </div>
    
    )
}