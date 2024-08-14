import { JogoMemoria } from "../../components/JogoDaMemoria/JogoMemoria";
import { JogoDaVelha } from "../../components/JogoDaVelha/Jogo";

interface CaminhoJogos {
    caminho : string,
    nome: string,
    componente: JSX.Element
}

export const jogosPath: Array<CaminhoJogos> = [
    
    {caminho : '/jogo-da-memoria', nome: 'Jogo Da Memória', componente:<JogoMemoria/>},
    {caminho : '/jogo-da-velha', nome: 'Jogo Da Velha', componente:<JogoDaVelha/>},
  
]