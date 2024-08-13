import { useState } from 'react';
import Button from '../../Button';
import TabuleiroJogoVelha from '../TabuleiroJogoVelha';
import './JogoDaVelha.scss';
import { MenuSecundario } from '../../MenuSecundario';

interface BlocoArea{
    conteudo : string,
    jaClicado : boolean;
    onClick: () => void
}

export const JogoDaVelha = () =>{
  
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [jogadores, setJogadores] = useState(1)
    
    const iniciarJogo = () => {
        setJogoIniciado(true)
    }

    const handleShowMenuChange = (status : boolean) : void => {
        setShowMenu(status)
    }

    return(
        <div className="jogoDaVelha">
            {showMenu ?
            <MenuSecundario fecharMenu={handleShowMenuChange} regras=''></MenuSecundario>
            :
           <TabuleiroJogoVelha></TabuleiroJogoVelha>}
        </div>
    )
}