import { useEffect, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Desenho} from "../../components/Forca/Personagem/Desenho"
import style from './JogoDaForca.module.scss';
import { Tecla } from "../../components/Forca/Tecla";
import { forcaPalavras } from "../../constants/forcaPalavras";

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
    // const [guessedCharacter, setGuessedCharacter] = useState([""]);
    const [guessedWord, setGuessedWord] = useState(Array(secretWord.length).fill(' '))
    const [tries, setTries] = useState(6);
    const alfabeto:string[] = [];

    preencherAlfabeto(alfabeto)

  
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
        if(guessedWord.join('') === secretWord.join('')){
            console.log("Parabéns, você ganhou!!!");
            setSecretWord(removerAcentos(escolhePalavra().toUpperCase()));
            setTries(6);
            
        }
    },[guessedWord])

    useEffect(() => {
        setGuessedWord(Array(secretWord.length).fill(' '))
    },[secretWord])
    useEffect(() => {
        if(tries === 0){
            console.log("Que pena, você perdeu")
        }
    },[tries])
    const onLetterClick = (e:any) => {
        console.log(e.target.innerText);
        console.log(e.target.style.backgroundColor)
        isGuessRight(e.target.innerHTML)
    }



    return(
        <div className={style.jogoDaForca}>
        <Desenho tentativas={tries}></Desenho>
        <Palavra palavra={guessedWord}></Palavra>
        <div className={style.letras}>
        {alfabeto.map(a => <Tecla key={a} onClick={onLetterClick} letra={a}></Tecla>)}
        </div>
        </div>
    )
}