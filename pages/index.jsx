import Head from 'next/head'

import EbookDownload from '../components/main/EbookDownload'
import Second from '../components/main/Second'
import Third from '../components/main/Third'
import Infoproduto from '../components/main/Infoproduto'
import OurCustomers from '../components/main/OurCustomers'
import LastCall from '../components/main/LastCall'
import Footer from '../components/Footer'

function App(props) {
    return (
        <>
            <Head>
                <title>Garden&Garden | Ebook</title>
                <meta property="og:title" content="Ebook de Jardinagem GRÁTIS!" key="title" />
            </Head>
            <EbookDownload/>
            <Second />
            <Third />
            <Infoproduto />
            <OurCustomers />
            <LastCall />
            <Footer />
        </>
    )
}

export default App