interface teclaProps{
    onClick: (e:any) => void,
    letra: string,
}

export const Tecla = ({onClick, letra}: teclaProps) => {
    
    return(
        <button onClick={onClick}>{letra}</button>
    )
}