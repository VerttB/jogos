import { useState } from 'react';
import Button from '../../Button';
import TabuleiroJogoVelha from '../TabuleiroJogoVelha';
import './JogoDaVelha.scss';

export const JogoDaVelha = () =>{
  
    const [jogoIniciado, setJogoIniciado] = useState(false)

    
    const iniciarJogo = () => {
        setJogoIniciado(true)
    }

    return(
        <div className="jogoDaVelha">
           <TabuleiroJogoVelha></TabuleiroJogoVelha>
        </div>
    )
}