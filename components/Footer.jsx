import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.cols}>
                <div className={styles.col}>
                    Copyright &copy; 2021
                    <br/>
                    <br/>
                    <i>garden&garden</i>
                </div>
                <div className={styles.col}>
                    <a href="#/produto" className={styles.link}><strong>Curso Jardinagem Fácil</strong></a>
                    <a href="#/produto" className={styles.link}>eBook</a>
                    <a href="#/produto" className={styles.link}>Produto</a>
                </div>
                <div className={styles.col}>
                    <a href="#/empresa" className={styles.link}><strong>Empresa</strong></a>
                    <a href="#/empresa" className={styles.link}>Sobre</a>
                    <a href="#/empresa" className={styles.link}>Notícias</a>
                    <a href="#/empresa" className={styles.link}>Eventos</a>
                    <a href="#/empresa" className={styles.link}>Blog</a>
                </div>
            </div>
            <div className={styles.credits}>
                <p>Desenvolvido por <a href="https://github.com/felipebetts" target="_blank" className={styles.link}>Felipe Betts</a></p>
            </div>
        </div>
    )
}

export default Footer