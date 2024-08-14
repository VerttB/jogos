

import  style  from './TabuleiroJogoVelha.module.scss'
export default function TabuleiroJogoVelha(){

   const jogar = (e : any ) => {
     e.target.style.backgroundImage = 'X'
     console.log(e.target.style)
   }



    return(
        <div className={style.TabuleiroJogoVelha}>
            {[...Array(9)].map((_, i) => <div className={style.area} key={i} onClick={jogar}></div>)}
        </div>
    )
}