import styles from './Second.module.css'
import CustomButton from '../input/CustomButton'

function Infoproduto(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Como funciona o Infoproduto?
            </h2>
            <hr/>
            <p className={styles.text}>
                <strong>O curso Jardinagem Fácil te ajuda.</strong>
                <br/>
                <strong style={{ marginTop: "15px"}}>Você ajuda o planeta.</strong>
            </p>
            <div className={styles.images}>
                <img className={styles.image} src="/images/plant-wall-of-succulents.jpg" alt=""/>
                <img className={styles.image} src="/images/thank-you-for-staying-home.jpg" alt=""/>
            </div>
            
            <p className={styles.text}>
                Transforme-se em um mestre jardineiro em apenas 15 horas de curso.
            </p>
            <CustomButton>Link Infoproduto</CustomButton>
        </div>
    )
}

export default Infoproduto