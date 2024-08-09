type ButtonProps = {
    onClick : () => void
    children : String,
}

export default function Button({onClick, children} : ButtonProps){
    return(
        <button className='button' onClick={onClick}> 
            {children}
        </button>
    )
}