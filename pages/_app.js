import '../styles/globals.css'
import Layout1 from '../components/Layout/Layout1'
import Layout2 from '../components/Layout/Layout2'
const layouts = {
   L1: Layout1,
   L2: Layout2,
}

function MyApp({ Component, pageProps }) {
   const Layout =
      layouts[Component.layout] || Layout1
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}

export default MyApp
