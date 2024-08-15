import { useState } from 'react';
import TabuleiroJogoVelha from '../../components/JogoDaVelha/TabuleiroJogoVelha';
import style from './JogoDaVelha.module.scss'
import { MenuSecundario } from '../../components/MenuSecundario';
import { possiveisVitorias } from '../../constants/jogoDaVelhaConstants';


export const JogoDaVelha = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [simbolo, setSimbolo] = useState('X')
    const [areaClicada, setAreaClicada] = useState<string[]>(new Array(9).fill(''));
    const [jogoFinalizado, setJogoFinalizado] = useState(false);

    const jogar = (id: number) => {

        if (jogoFinalizado || areaClicada[id] !== '') {
            return;
        }
        const novasJogadas = [...areaClicada];
        novasJogadas[id] = simbolo;
        setAreaClicada([...novasJogadas]);

        const resultado = verificaVitoria(novasJogadas);
        finalizarJogo(resultado);
        if (resultado === 'n') {
            setTimeout(() => jogadaAuto(novasJogadas), 100);
        }

    }

    const jogadaAuto = (novasJogadas: string[]) => {
        if (jogoFinalizado) return;
        let pos = Math.floor(Math.random() * 9)

        while (novasJogadas[pos] !== '') {
            pos = Math.floor(Math.random() * 9);
        }
        console.log("Ia jogou")

        novasJogadas[pos] = 'O';
        setAreaClicada([...novasJogadas]);

        const resultado = verificaVitoria(novasJogadas);
        finalizarJogo(resultado);

    }
    const verificaVitoria = (novasJogadas: string[]): string => {
        for (let i = 0; i < possiveisVitorias.length; i++) {
            const [a, b, c] = possiveisVitorias[i];
            if (novasJogadas[a] && novasJogadas[a] === novasJogadas[b] && novasJogadas[a] === novasJogadas[c]) {
                return novasJogadas[a];
            }
        }
        const areasRestantes = novasJogadas.some(ac => ac === '');
        if (!areasRestantes) {
            return 'e';
        }
        return 'n';
    };

    const finalizarJogo = (elemento: string) => {
        if (elemento && elemento !== 'n') {
            console.log("O " + elemento + " venceu o jogo");
            setJogoFinalizado(true);
            setTimeout(resetarJogo, 1500);
        }
        else if (elemento && elemento === 'e') {
            console.log("Empate!!");
            setJogoFinalizado(true);
            setTimeout(resetarJogo, 1500);
        }
    }

    const resetarJogo = () => {
        setAreaClicada(new Array(9).fill(''));
        setJogoFinalizado(false);
        setSimbolo('X')
    }

    const handleShowMenuChange = (status: boolean): void => {
        setShowMenu(status)
    }

    return (
        <div className={style.jogoDaVelha}>
            {
                showMenu
                    ?
                    <MenuSecundario fecharMenu={handleShowMenuChange} regras=''></MenuSecundario>
                    :
                    <TabuleiroJogoVelha areaClicada={areaClicada} jogar={jogar}></TabuleiroJogoVelha>
            }
        </div>
    )
}