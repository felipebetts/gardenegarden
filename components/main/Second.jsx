import styles from './Second.module.css'
import CustomButton from '../input/CustomButton'

function Second(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Faça o seu jardim prosperar com esse eBook grátis
            </h2>
            <hr/>
            <p className={styles.text}>
                <strong>Jardineiros iniciantes que aplicaram este método tiveram sucesso em suas colheitas</strong>
                <br/>
                <strong style={{ marginTop: "15px"}}>Você também pode ter.</strong>
            </p>
            <p className={styles.text}>
                Descubra os 4 passos que irão aumentar drasticamente o rendimento das colheitas. Baixe este guia prático para melhorar a saúde do seu jardim.
            </p>
            <a href="#top">
                <CustomButton>Baixe já</CustomButton>
            </a>
        </div>
    )
}

export default Second