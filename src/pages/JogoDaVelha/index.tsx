import { useState } from 'react';
import TabuleiroJogoVelha from '../../components/JogoDaVelha/TabuleiroJogoVelha';
import style from './JogoDaVelha.module.scss'
import { MenuSecundario } from '../../components/MenuSecundario';
import { VICTORY_CONDITIONS, DRAW, CONTINUE, EMPTY, DRAW_MESSAGE, WIN_MESSAGE, DEFEAT_MESSAGE } from '../../constants/jogoDaVelhaConstants';
import { Dialog } from '../../components/Dialog/Dialog';

export const JogoDaVelha = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [showDialog, setShowDialog] = useState(false)
    const [simbolo, setSimbolo] = useState('X')
    const [areaClicada, setAreaClicada] = useState<string[]>(new Array(9).fill(''));
    const [jogoFinalizado, setJogoFinalizado] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const jogar = (id: number) => {

        if (jogoFinalizado || areaClicada[id] !== EMPTY) {
            return;
        }
        const novasJogadas = [...areaClicada];
        novasJogadas[id] = simbolo;
        setAreaClicada([...novasJogadas]);

        const resultado = verificaVitoria(novasJogadas);
        finalizarJogo(resultado);
        if (resultado === CONTINUE) {
            setTimeout(() => jogadaAuto(novasJogadas), 100);
        }

    }

    const jogadaAuto = (novasJogadas: string[]) => {
        if (jogoFinalizado) return;
        let pos = Math.floor(Math.random() * 9)

        while (novasJogadas[pos] !== '') {
            pos = Math.floor(Math.random() * 9);
        }
      

        novasJogadas[pos] = 'O';
        setAreaClicada([...novasJogadas]);

        const resultado = verificaVitoria(novasJogadas);
        finalizarJogo(resultado);

    }
    const verificaVitoria = (novasJogadas: string[]): string => {

        for (let i = 0; i < VICTORY_CONDITIONS.length; i++) {
            const [a, b, c] = VICTORY_CONDITIONS[i];
            if (novasJogadas[a] && novasJogadas[a] === novasJogadas[b] && novasJogadas[a] === novasJogadas[c]) {
                return novasJogadas[a];
            }
        }
        const areasRestantes = novasJogadas.some(ac => ac === EMPTY);
        if (!areasRestantes) {
    
            return DRAW;
        }
        return CONTINUE;
    };

    const finalizarJogo = (elemento: string) => {
        let m  = elemento === 'O' ? DEFEAT_MESSAGE : WIN_MESSAGE
        if (elemento && elemento !== CONTINUE && elemento !== DRAW) {
            setJogoFinalizado(true);
            setTimeout( () =>{
            setMensagem(m);
            setShowDialog(true);
        }, 300
        )
        }
        else if (elemento && elemento === DRAW) {
            setJogoFinalizado(true);
            setTimeout( () =>{
            setMensagem(DRAW_MESSAGE);
            setShowDialog(true);
            }, 300)
        }
    }

    const resetarJogo = () => {
        setAreaClicada(new Array(9).fill(''));
        setJogoFinalizado(false);
        setShowDialog(false);
        setSimbolo('X')
    }

    const handleShowMenuChange = (status: boolean): void => {
        setShowMenu(status);
        resetarJogo();
    }

    return (
        <div className={style.jogoDaVelha}>
            {
                showMenu
                    ?
                    <MenuSecundario jogo="Jogo da Velha" fecharMenu={handleShowMenuChange} regras=''></MenuSecundario>
                    :
                    <>
                    <TabuleiroJogoVelha areaClicada={areaClicada} jogar={jogar}></TabuleiroJogoVelha>
                    <Dialog open={showDialog} 
                    win={true}
                    clickPlayAgain={resetarJogo}
                     clickBackToMenu={() => handleShowMenuChange(true)}
                     mensagem={mensagem} ></Dialog>
                    </>
            }
        </div>
    )
}