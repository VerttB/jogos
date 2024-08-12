type ButtonProps = {
    children? : String,
    onClick?: () => void
}

export default function Button({children, onClick} : ButtonProps){
    return(
        <button className='button' onClick={onClick}> 
            {children}
        </button>
    )
}