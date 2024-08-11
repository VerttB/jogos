import { Link } from "react-router-dom"

export default function MenuPrincipal(){
    return(
        <div>
            <Link to={'/jogo-da-memoria'}>Jogo da memoria</Link>
        </div>
    )
}