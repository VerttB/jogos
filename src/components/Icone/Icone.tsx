import style from './Icone.module.scss';

interface IconeProps{
    imagem : string,
    titulo : string,
}

export const Icone : React.FC<IconeProps> = ({imagem, titulo}) => {
    console.log("imagem", imagem);

    return(
        <div className={style.icone}>
            <img className={style.imagem} src={imagem} alt={``} />
            <p className={style.paragrafo}>
                {titulo}
            </p>
        </div>
    )
}