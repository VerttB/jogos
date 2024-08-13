import {  useState } from "react";
import Button from "../../Button";
import './TabuleiroJogoVelha.scss'

export default function TabuleiroJogoVelha(){

   const jogar = (e : any ) => {
     e.target.style.backgroundImage = 'X'
     console.log(e.target.style)
   }



    return(
        <div className='tabuleiroJogoVelha'>
            {[...Array(9)].map((_, i) => <div className="area" key={i} onClick={jogar}></div>)}
        </div>
    )
}