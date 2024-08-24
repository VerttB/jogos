import style from './Button.module.scss'

type ButtonProps = {
    children? : String,
    onClick?: (event?:any) => void,
    size?: "small" |"normal" | "large"
}

export default function Button({children, onClick, size = "normal"} : ButtonProps){
    
    return(
        <button className={`${style.button} ${style[size]} `} onClick={onClick}> 
            {children}
        </button>
    )
}