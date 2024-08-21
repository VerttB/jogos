import { useEffect, useRef, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Personagem } from "../../components/Forca/Personagem"
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
export const JogoDaForca = () => {
    const [secretWord, setSecretWord] = useState(escolhePalavra().toUpperCase().split(''));
    const [guessedCharacter, setGuessedCharacter] = useState([""]);
    const [guessedWord, setGuessedWord] = useState(Array(secretWord.length).fill(' _ '))
    const [tries, setTries] = useState(6);
    const alfabeto:string[] = [];

    preencherAlfabeto(alfabeto)

  
    const isGuessRight = (chute: string, fundo : any) => {
      
       const word = guessedWord.map((w,i) => {
            if(chute === secretWord[i]) return chute;
            else if(w == ' _ ') {
                return ' _ ';
            }
            else return w;
        });
        if(!word.includes(chute)){
            setTries(t => t - 1);
            fundo = "#FF0000";
            
            console.log(tries);
        }
    
    console.log(word)
    setGuessedWord([...word]);

    }

    useEffect(() => {
        if(guessedWord.join('') === secretWord.join('')){
            console.log("Parabéns, você ganhou!!!");
        }
    },[guessedWord])

    useEffect(() => {
        if(tries === 0){
            console.log("Que pena, você perdeu")
        }
    },[tries])
    const onLetterClick = (e:any) => {
        console.log(e.target.innerText);
        console.log(e.target.style.backgroundColor)
        isGuessRight(e.target.innerHTML, e.target.style.backgroundColor)
    }



    return(
        <div className={style.jogoDaForca}>
        <Personagem tentativas={tries}></Personagem>
        <Palavra></Palavra>
        {alfabeto.map(a => <Tecla key={a} onClick={onLetterClick} letra={a}></Tecla>)}
        
        </div>
    )
}