import { useEffect, useRef } from 'react';
import  Button  from '../Button';
import style from './Dialog.module.scss';
interface DialogProps{

    win: boolean,
    clickPlayAgain: () => void,
    clickBackToMenu: () => void,
    open : boolean

}

export const Dialog = ({win, clickPlayAgain, clickBackToMenu, open} : DialogProps) => {
    const vitoria = 'Parabéns, você venceu!!';
    const derrota = 'Que pena, você perdeu';
    const mensagem = win ? vitoria : derrota;
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if(open) {
            console.log("errado")
            dialogRef.current?.showModal();}
        else{ 
            dialogRef.current?.close();
            console.log("fechei?")
        }
    },[open])
    
    const closeModal = (fun : () => void) => {
        dialogRef.current?.close();
        fun();
    }


    return(
        <dialog ref={dialogRef} className={`${style.dialog}`} >
            <h2 className={style.titulo}>  {mensagem} </h2>
            <div className={style.botoes}>
            <Button onClick={() => closeModal(clickPlayAgain)}>
                Jogar Novamente
            </Button>
            <Button onClick={() => closeModal(clickBackToMenu)}>
                Voltar ao Menu
            </Button>
            </div>
        </dialog>
    )
}