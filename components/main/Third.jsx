import styles from './Third.module.css'

import WarningIcon from '@material-ui/icons/Warning'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

function Third(props) {
    return (
        <div className={styles.third}>
            <h2 className={styles.title}>75% dos problemas com plantas são facilmente resolvidos.</h2>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <WarningIcon style={{ fontSize: '60px'}}/>
                    <h3>Aumento de 17%</h3>
                    <p>Em algo muito relevante.</p>
                </div>
                <div className={styles.icon}>
                    <Brightness4Icon style={{ fontSize: '60px'}}/>
                    <h3>1 a cada 4</h3>
                    <p>Fazem isso.</p>
                </div>
                <div className={styles.icon}>
                    <AccountBalanceWalletIcon style={{ fontSize: '60px'}}/>
                    <h3>Rendimentos superiores</h3>
                    <p>A técnica funcionou 97% das vezes.</p>
                </div>
            </div>
        </div>
    )
}

export default Third