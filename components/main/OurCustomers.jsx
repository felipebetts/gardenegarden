import styles from './Second.module.css'
import CustomButton from '../input/CustomButton'

function OurCustomers(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Nossos clientes
            </h2>
            <p className={styles.text}>
                <strong>Parceiros que confiam em nós</strong>
            </p>
        </div>
    )
}

export default OurCustomers