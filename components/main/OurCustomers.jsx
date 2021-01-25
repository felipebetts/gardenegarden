import styles from './Second.module.css'
import CustomButton from '../input/CustomButton'

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import RedditIcon from '@material-ui/icons/Reddit';

function OurCustomers(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Nossos clientes
            </h2>
            <p className={styles.text}>
                <strong>Parceiros que confiam em nós</strong>
            </p>
            <div className={styles.row}>
                <TwitterIcon style={{ margin: "10px", marginLeft: "60px", marginRight: "60px", fontSize: "60px"}}/>
                <YouTubeIcon style={{ margin: "10px", marginLeft: "60px", marginRight: "60px", fontSize: "60px"}}/>
                <AppleIcon style={{ margin: "10px", marginLeft: "60px", marginRight: "60px", fontSize: "60px"}}/>
                <RedditIcon style={{ margin: "10px", marginLeft: "60px", marginRight: "60px", fontSize: "60px"}}/>
            </div>
        </div>
    )
}

export default OurCustomers