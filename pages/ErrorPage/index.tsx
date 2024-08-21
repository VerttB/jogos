import style from './ErrorPage.module.scss';

export const ErrorPage = () => {

    return(

        <div className={style.errorPage}>
            <h3 className={style.titulo}>
                Página não encontrada
            </h3>
                <p className={style.paragrafo}>Verifique a URL</p>
        </div>
    )
}

