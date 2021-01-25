import styles from './EbookDownload.module.css'
import CustomTextField from '../input/CustomTextField'

import CustomButton from '../input/CustomButton'
import { useState } from 'react'

function EbookDownload(props) {

    const initialForm = {
        nome: '',
        sobrenome: '',
        email: '',
        celular: ''
    }

    const [form, setForm] = useState(initialForm)

    const handleClick = () => {
        setForm(initialForm)
    }

    return (
        <div className={styles.main}>
            <div className={styles.fade}>
                <div className={styles.logoContainer}>
                    <a href="/">
                        <h2 className={styles.logo}>garden<strong>&</strong>garden</h2>
                        <h2 className={styles.logoSmall}>g&g</h2>
                    </a>
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
                                    <CustomTextField value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value})} label="Nome" />
                                    <CustomTextField value={form.sobrenome} onChange={e => setForm({ ...form, sobrenome: e.target.value})} label="Sobrenome" />
                                </div>
                                <div className={styles.formRow}>
                                    <CustomTextField value={form.email} onChange={e => setForm({ ...form, email: e.target.value})} label="Email" fullWidth/>
                                </div>
                                <div className={styles.formRow}>
                                    <CustomTextField value={form.celular} onChange={e => setForm({ ...form, celular: e.target.value})} label="Celular" fullWidth/>
                                </div>
                                <div className={styles.formRow}>
                                    <CustomButton variant="outlined" onClick={() => handleClick()}>Download</CustomButton>
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