import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "../components/index";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
export default function App({ Component, pageProps }) {
  config.autoAddCss = false;
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  )
}
