export const gerarMatriz = () =>{
    let matriz: Array<number> = Array(81);
    let numeroRepetido = [];
    const breakPoint = 9;
    for(let i = 0; i< matriz.length;i++){
        if(i === breakPoint) numeroRepetido = [];
        let numeroSorteado;
        matriz[i] = Math.floor(Math.random() * 9 + 1);
    }
    return matriz
}