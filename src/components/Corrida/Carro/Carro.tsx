import { Ref, useEffect, useState, forwardRef } from "react";
import style from "./Carro.module.scss"


export const Carro = forwardRef<HTMLDivElement>((props, ref) => {
    const [andar, setAndar] = useState("direita");

    const handleMovement = (key: string) => {
        if (key === "ArrowRight" || key === "d") setAndar("direita");
        else if (key === "ArrowLeft" || key === "a") setAndar("esquerda");
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            handleMovement(event.key);  
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return(
      
        <div className={`${style.carro} ${andar === "direita" ? style.direita : style.esquerda}`}
        ref={ref}>
            <img src="src/assets/carro.png" alt="" />
        </div>
       
    )
})