import InputBtn from "../InputBtn"


export const JogoDaVelha = () =>{
    const quantidadeQuadrados = 9;
    const inputGrids = [];

    const iniciarJogo = () => {
        for (let i = 0; i < quantidadeQuadrados; i++) {
            inputGrids.push(<InputBtn></InputBtn>)
        }
    }

    return(
        <div className="jogoDaVelha">
            {inputGrids.map(inp => inp)}
        </div>
    )
}