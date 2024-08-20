import { useEffect, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Personagem } from "../../components/Forca/Personagem"
import style from './JogoDaForca.module.scss';

export const JogoDaForca = () => {
    const [secretWord, setSecretWord] = useState("Carro".split(''));
    const [guessedCharacter, setGuessedCharacter] = useState([""]);
    const [guessedWord, setGuessedWord] = useState([""])
    const [tries, setTries] = useState(5);


    const isGuessRight = () => {
        setGuessedWord( gw => {
           
        }
        
        )
    }

    useEffect(() => {
        if(secretWord)
            setGuessedWord(Array(secretWord.length).fill(''));

    },[secretWord]);

    const handleGuessedCharacter = (e:any) => {
        console.log(e.target.value)
        setGuessedCharacter(e.target.value);
    }

    // useEffect( () => {
    //     if(tries === 0)
    // },[tries])

    // useEffect(() => {
    //      isGuessRight();
    //  },[handleGuessedWord])



    return(
        <div className={style.jogoDaForca}>
        <input type="text" maxLength={1} value={guessedCharacter} onChange={handleGuessedCharacter} />
        <input type="submit" onClick={isGuessRight} />
        <Personagem></Personagem>
        <Palavra></Palavra>
        </div>
    )
}