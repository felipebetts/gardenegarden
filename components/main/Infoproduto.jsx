import { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert';

import styles from './Second.module.css'
import CustomButton from '../input/CustomButton'

function Infoproduto(props) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        console.log(`clicou!`)
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

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
            <CustomButton onClick={handleClick}>Link Infoproduto</CustomButton>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                Nesse momento será aberta a página do infoproduto
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Infoproduto