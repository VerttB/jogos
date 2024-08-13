import {  useState } from "react";
import Button from "../../Button";
import './TabuleiroJogoVelha.scss'

export default function TabuleiroJogoVelha(){

   const jogar = (e : any ) => {
     e.target.setAttribute('disabled', '')
   }



    return(
        <div className='tabuleiroJogoVelha'>
            {[...Array(9)].map((_, i) => <div key={i} className="area" onClick={jogar}></div>)}
        </div>
    )
}