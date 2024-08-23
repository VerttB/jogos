import { useEffect, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Desenho} from "../../components/Forca/Personagem/Desenho"
import style from './JogoDaForca.module.scss';
import { Tecla } from "../../components/Forca/Tecla";
import { forcaPalavras } from "../../constants/forcaPalavras";
import { MenuSecundario } from "../../components/MenuSecundario";
import { Dialog } from "../../components/Dialog/Dialog";

function preencherAlfabeto(alfabeto:string[]){
    for(let i = 0;i<26;i++){
        alfabeto.push(String.fromCharCode(65 + i))
    }
}
function escolhePalavra(){
    const random = Math.floor(Math.random() * forcaPalavras.length);
    return forcaPalavras[random]
}

const removerAcentos = (texto: string): string[] => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split('');
};
export const JogoDaForca = () => {
    const [secretWord, setSecretWord] = useState(removerAcentos(escolhePalavra().toUpperCase()));
    const [guessedWord, setGuessedWord] = useState(Array(secretWord.length).fill(' '));
    const [showMenu, setShowMenu] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const [mensagem, setMensagem] = useState("")
    const [tries, setTries] = useState(6);
    const alfabeto:string[] = [];

    preencherAlfabeto(alfabeto)

  
 

    const resetarJogo = () => {
        setShowDialog(false);
        setSecretWord(removerAcentos(escolhePalavra().toUpperCase()));
        setTries(6);
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

            
            console.log(tries);
        }
    
    console.log(word)
    setGuessedWord([...word]);

    }

    useEffect(() => {
        const verificaVitoria = () => {
            if(guessedWord.join('') === secretWord.join('')){
                setMensagem("Parabéns, você ganhou!!!");
                setShowDialog(true);
               
            }
            else if(tries === 0){
                setMensagem(`Que pena, você perdeu \n A palavra era ${secretWord.join('')}`)
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
        setShowDialog(false)
    }

    const iniciarJogo = () => {
        resetarJogo();
    }

    useEffect(() => {
        if(showMenu === false &&  showDialog === false) resetarJogo()
    },[showMenu])
    return(
        <div className={style.jogoDaForca}>
        {showMenu
        ?
        <MenuSecundario jogo="Jogo da Forca" regras=""   fecharMenu={handleShowMenu}/> 
        :

        <>
        <Desenho tentativas={tries}></Desenho>
        <Palavra palavra={guessedWord}></Palavra>
        <div className={style.letras}>
        {alfabeto.map(a => <Tecla key={a} secretWord={secretWord} onClick={onLetterClick} letra={a}></Tecla>)}
        </div>
        <Dialog win={true} clickBackToMenu={() => handleShowMenu(true)} clickPlayAgain={resetarJogo} open={showDialog} mensagem={mensagem} ></Dialog>
        </>
        
        }
        </div>
    
    )
}