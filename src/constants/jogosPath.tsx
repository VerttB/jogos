import { JogoMemoria } from "../pages/JogoMemoria";
import { JogoDaVelha } from "../pages/JogoDaVelha";
import { JogoDaForca } from "../pages/JogoDaForca";
import { TabuleiroSudoku } from "../components/Sudoku/TabuleiroSudoku";
import { Carro } from "../components/Corrida/Carro/Carro";
import { Pista } from "../components/Corrida/Pista/Pista";

interface CaminhoJogos {
    caminho : string,
    nome: string,
    componente: JSX.Element
}

export const jogosPath: Array<CaminhoJogos> = [
    
    {caminho : '/jogo-da-memoria', nome: 'Jogo Da Memoria', componente:<JogoMemoria/>},
    {caminho : '/jogo-da-velha', nome: 'Jogo Da Velha', componente:<JogoDaVelha/>},
    {caminho : '/jogo-da-forca', nome: 'Forca' , componente:<JogoDaForca/>},
    {caminho: '/sudoku', nome: 'sudoku', componente:<TabuleiroSudoku></TabuleiroSudoku>},
    {caminho: '/carro', nome: 'carro', componente:<Pista></Pista>}
  
]