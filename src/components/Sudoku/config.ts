const verificaLinha = (i : number,j : number, post : number, matriz:any[][]) => {
    console.log(i , j)
    for(let k = i;k<9;k++){
      for(let l = j;l<9;l++){
        if(matriz[k][l] === post) return true;
      }
    }
    return false;
  };
  
//   const verificaColuna = () => {};
  
//   const verificaBloco = (i,j, sub) => {
      
//   };
  
  const gerarRandom = () => {
    return Math.floor(Math.random() * 9 + 1)
  }
  


export const criaMatriz = () => {
let matriz = Array(9).fill(null).map(()=>Array(9).fill(''));
let iLinha = 0;
let jColuna = -3;
  for(let i = 0;i<9;i++){
    if( i !== 0 && i%3 === 0) iLinha+=3;
    for(let j = 0;j<9;j++){
      let post;
      if(j%3 === 0) jColuna+=3;
      while(1){
        post = gerarRandom();
        

        if(!(matriz[i].includes(post))){
          if(!verificaLinha(iLinha, jColuna, post, matriz)) break;
        }
        }; 
        matriz[i][j] = post
      }
      
      jColuna = 0;
    }

    return matriz;
}