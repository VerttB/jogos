import { useEffect, useState } from 'react';
import TabuleiroJogoVelha from '../TabuleiroJogoVelha';
import  style  from './JogoDaVelha.module.scss'
import { MenuSecundario } from '../../MenuSecundario';
import { possiveisVitorias } from '../../../constants/jogoDaVelhaConstants';


export const JogoDaVelha = () =>{
    const [player, setPlayer] = useState(1);
    const [showMenu, setShowMenu] = useState(true);
    const [simbolo, setSimbolo] = useState('X')
    const [areaClicada, setAreaClicada] = useState<string[]>(new Array(9).fill(''));

    const jogar = (id : number) =>{
        const novasJogadas = [...areaClicada];
        console.log(novasJogadas)
            if(novasJogadas[id] === ''){
                novasJogadas[id] = simbolo;
                setAreaClicada(novasJogadas);
                setSimbolo(prev => 'O');
                setTimeout(jogadaAuto, 100);
            
        } 
     }

    const jogadaAuto = () => {
        let pos = Math.floor(Math.random() * 9 + 1)

        const areas = [...areaClicada]
        while(areas[pos] !== ''){
            pos = Math.floor(Math.random() * 9 + 1);
        }
        console.log(pos);
        areas[pos] = simbolo;
        setAreaClicada(areas)
        setSimbolo('X');

    }
    const verificaVitoria = ():string => {
       for(let i = 0; i < possiveisVitorias.length;i++){
        const [a,b,c] = possiveisVitorias[i];
            if( areaClicada[a] && areaClicada[a] === areaClicada[b] && areaClicada[a] === areaClicada[c]){
                console.log(a , b , c)
                return areaClicada[a]
            }
        }
        return 'n'
    }
    const finalizarJogo = (elemento : string) => {
        if(elemento && elemento !== 'n'){
            console.log("O " + elemento + " venceu o jogo");
            resetarJogo();
        }
    }

    const resetarJogo = () => {
        setAreaClicada(new Array(9).fill(''));
        setSimbolo('X')
    }
    
    const handleShowMenuChange = (status : boolean) : void => {
        setShowMenu(status)
    }
    
    useEffect(() => {
        finalizarJogo(verificaVitoria());
        
    },[areaClicada])

    useEffect(() => {
        
    }, [jogar])
    return(
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