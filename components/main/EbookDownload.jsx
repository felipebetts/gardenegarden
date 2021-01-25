import styles from './EbookDownload.module.css'
import CustomTextField from '../input/CustomTextField'

import CustomButton from '../input/CustomButton'

function EbookDownload(props) {
    return (
        <div className={styles.main}>
            <div className={styles.fade}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.logo}>garden<strong>&</strong>garden</h2>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            <h1>O seu guia de jardinagem urbana.</h1>
                        </div>
                        <div className={styles.description}>
                            <p>Descubra como você pode: </p>
                            <ul>
                                <li className={styles.listItem}>Fazer o seu próprio substrato</li>
                                <li className={styles.listItem}>Identificar problemas com facilidade</li>
                                <li className={styles.listItem}>Começar o seu jardim do absoluto ZERO!</li>
                            </ul>
                            <p>Esse eBook grátis irá te tornar um jardineiro de dedo verde em apenas 4 passos, mesmo que você nunca tenha tocado em um jardim.</p>
                        </div>
                    </div>
                    <div className={styles.forms}>
                        <div className={styles.formBox}>
                            <div className={styles.formHeader}>
                                <h3 className={styles.title}>Faça o download grátis do eBook <i>g&g</i></h3>
                            </div>
                            <div className={styles.formContent}>
                                <div className={styles.formRow}>
                                    <CustomTextField label="Nome" />
                                    <CustomTextField label="Sobrenome" />
                                </div>
                                <div className={styles.formRow}>
                                    <CustomTextField label="Email" fullWidth/>
                                </div>
                                <div className={styles.formRow}>
                                    <CustomTextField label="Celular" fullWidth/>
                                </div>
                                <div className={styles.formRow}>
                                    <CustomButton variant="outlined">Download</CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EbookDownload