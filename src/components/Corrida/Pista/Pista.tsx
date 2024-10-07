import { ReactElement, useEffect, useRef, useState } from "react";
import { Carro } from "../Carro/Carro";
import { Obstaculo } from "../Obstaculo/Obstaculo";
import style from "./Pista.module.scss";



export const Pista = () => {
    const [obstaculos, setObstaculos] = useState<Array<{ id: number, side: string }>>([]);
    const [jogoIniciado, setJogoIniciado] = useState(true);
    const carroRef = useRef<null | HTMLDivElement>(null)
    const adicionarObstaculo = () => {
        const obstaculoNovo = {
            id: Date.now(),
            side: Math.random() > 0.5 ? "direita" : "esquerda"
        };
 
        setObstaculos((prevObstaculos) => [...prevObstaculos, obstaculoNovo]);

        setTimeout(() => {
            setObstaculos((prevObstaculos) => prevObstaculos.filter((obstaculo) => obstaculo !== obstaculoNovo));
        }, 5000);
    };

    const verificaColisao = () => {
        const carroBounds = carroRef.current?.getBoundingClientRect();
        obstaculos.forEach((o) => {
            const obsRef = document.getElementById(`obst-${o.id}`);
            const obsBounds = obsRef?.getBoundingClientRect();
            if(carroBounds && obsBounds && carroBateu(carroBounds, obsBounds))
                console.log("bateu")
        })
        

    }


    const carroBateu = (carro: DOMRect, obstaculo: DOMRect) => {
        return (
            carro.x < obstaculo.x + obstaculo.width &&
            carro.x + carro.width > obstaculo.x &&
            carro.y < obstaculo.y + obstaculo.height &&
            carro.y + carro.height > obstaculo.y
        );
    }
    useEffect(() => {
        const interval = setInterval(() => {
            adicionarObstaculo();
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        const colisaoInterval = setInterval(() => {
            verificaColisao()
        }, 100)
        return () => clearInterval(colisaoInterval)
    }
)
    
    return(
        <div className={style.mapa}>
        <div className={style.pista}>
            <Carro ref={carroRef}></Carro>
           {obstaculos.map((o) => 
           <Obstaculo
           key={o.id}
           side={o.side}
           id={`obst-${o.id}`}>
           </Obstaculo>)}
        </div>
        </div>
    )
}