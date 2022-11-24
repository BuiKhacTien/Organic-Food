import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../layouts/Default.jsx";
import { Provider } from "react-redux";
import store from "../store";


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
