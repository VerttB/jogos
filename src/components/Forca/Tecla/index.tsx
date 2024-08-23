import { useEffect, useRef } from 'react';
import style from './Tecla.module.scss';
interface teclaProps{
    onClick: (letra:string) => void,
    letra: string,
    secretWord: string[],
}

export const Tecla = ({onClick, letra, secretWord}: teclaProps) => {
    const wordRef = useRef<HTMLSpanElement | null>(null)
    
    const handleClick = () => {
        if(wordRef.current){
            if(secretWord.includes(letra)){
                wordRef.current.style.borderColor = 'green'
                wordRef.current?.setAttribute('disabled', '')
            }
            else{
                wordRef.current.style.borderColor = 'red'
                wordRef.current?.setAttribute('disabled', '')
            }
    }
        onClick(letra)
    }

    useEffect(() => {
        if(wordRef.current)
            wordRef.current.style.borderColor = 'black'
        wordRef.current?.removeAttribute('disabled')
    },[secretWord]);
    
    return(
        <button className={style.tecla}
        disabled={wordRef.current?.hasAttribute('disabled')}
        onClick={handleClick}><span ref={wordRef} className={style.letra}>{letra}</span></button>
    )
}