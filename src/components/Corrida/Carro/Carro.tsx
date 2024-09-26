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
            handleMovement(event.key);  // Passa a tecla pressionada para a função de movimento
        };

        // Adiciona o event listener ao window para capturar as teclas pressionadas
        window.addEventListener("keydown", handleKeyDown);

        // Remove o event listener ao desmontar o componente
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