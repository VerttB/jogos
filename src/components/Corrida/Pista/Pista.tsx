import { useEffect, useState } from "react";
import { Carro } from "../Carro/Carro";
import { Obstaculo } from "../Obstaculo/Obstaculo";
import style from "./Pista.module.scss";



export const Pista = () => {
    const [obstaculos, setObstaculos] = useState<JSX.Element[]>([]);   

    const adicionarObstaculo = () => {
        const s = Math.floor(Math.random() * 2);
        const obsstaculoNovo = <Obstaculo 
        side={s === 0 ? "direita" : "esquerda"}
        key={Date.now()}></Obstaculo>;
        setObstaculos(obstaculos => [...obstaculos, obsstaculoNovo]);

        setTimeout(() => {
            setObstaculos((prevObstaculos) => prevObstaculos.filter((obstaculo) => obstaculo !== obsstaculoNovo));
        }, 5000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            adicionarObstaculo();
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    
    return(
        <div className={style.mapa}>
        <div className={style.pista}>
            <Carro></Carro>
            {obstaculos}
        </div>
        </div>
    )
}