import { useEffect, useState } from "react";
import { Palavra } from "../../components/Forca/Palavra"
import { Personagem } from "../../components/Forca/Personagem"
import style from './JogoDaForca.module.scss';

export const JogoDaForca = () => {
    const [secretWord, setSecretWord] = useState<string[]>("Carro".split(''));
    const [guessedCharacter, setGuessedCharacter] = useState<string[]>();
    const [guessedWord, setGuessedWord] = useState([])
    const [tries, setTries] = useState(5);

    useEffect( () => {
        if(tries === 0)
    },[tries])

    useEffect(() => {
        if(guessedWord === secretWord)
    },[guessedWord])
    return(
        <div className={style.jogoDaForca}>
        <Personagem></Personagem>
        <Palavra></Palavra>
        </div>
    )
}