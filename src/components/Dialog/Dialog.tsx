import  Button  from '../Button'

interface DialogProps{

    win: boolean,
    clickPlayAgain: () => void,
    clickBackToMenu: () => void,
    open : boolean

}
export const Dialog = ({win, clickPlayAgain, clickBackToMenu, open} : DialogProps) => {
    const vitoria = 'Parabéns, você venceu!!'
    const derrota = 'Que pena, você perdeu'
    const mensagem = win ? vitoria : derrota
    
    return(
        <dialog open={open}>
            <h2> {mensagem} </h2>
            <Button onClick={clickPlayAgain}>
                Jogar Novamente
            </Button>
            <Button onClick={clickBackToMenu}>
                Voltar ao Menu
            </Button>
        </dialog>
    )
}