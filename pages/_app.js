import Layout from '../components/Layout'
import SwiperCore, { Autoplay } from 'swiper'
import '../styles/globals.sass'

SwiperCore.use([Autoplay])

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )}

export default MyApp
