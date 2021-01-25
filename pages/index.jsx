import EbookDownload from '../components/main/EbookDownload'
import Second from '../components/main/Second'
import Third from '../components/main/Third'
import Infoproduto from '../components/main/Infoproduto'
import OurCustomers from '../components/main/OurCustomers'
import LastCall from '../components/main/LastCall'
import Footer from '../components/Footer'

function App(props) {
    return (
        <div>
            <EbookDownload/>
            <Second />
            <Third />
            <Infoproduto />
            <OurCustomers />
            <LastCall />
            <Footer />
        </div>
    )
}

export default App