import { useEffect, useState } from "react";
import style from "./Carro.module.scss"

export const Carro = () => {
    const [andar, setAndar] = useState("direita");

    const handleMovement = (key: string) => {
        if (key === "ArrowRight") setAndar("direita");
        else if (key === "ArrowLeft") setAndar("esquerda");
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
        <div className={style.mapa}>
        <div className={`${style.carro} ${andar === "direita" ? style.direita : style.esquerda}`}>Carro</div>
        </div>
    )
}