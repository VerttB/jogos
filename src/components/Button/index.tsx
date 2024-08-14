import style from './Button.module.scss'

type ButtonProps = {
    children? : String,
    onClick?: (event?:any) => void
}

export default function Button({children, onClick} : ButtonProps){
    return(
        <button className={style.button} onClick={onClick}> 
            {children}
        </button>
    )
}