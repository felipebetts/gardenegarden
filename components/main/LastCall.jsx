import styles from './LastCall.module.css'
import Button from '@material-ui/core/Button'

function LastCall(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                O caminho para ser um mestre jardineiro
            </h2>
            <p className={styles.text}>
                <strong>Os 4 passos para a colheita certa</strong>
            </p>
            <Button variant="contained">Baixe o eBook</Button>
        </div>
    )
}

export default LastCall