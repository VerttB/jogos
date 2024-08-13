import {  useState } from "react";
import Button from "../../Button";
import './TabuleiroJogoVelha.scss'

export default function TabuleiroJogoVelha(){

   const jogar = (e : any ) => {
     e.target.innerText = 'X'
   }



    return(
        <div className='tabuleiroJogoVelha'>
            {[...Array(9)].map((_, i) => <Button  key={i} onClick={jogar}>{''}</Button>)}
        </div>
    )
}