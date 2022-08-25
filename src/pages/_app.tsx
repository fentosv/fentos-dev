import '../styles/App.scss'
import '../styles/var.scss'
import '../styles/normalize.css'

import { store } from '@app/store'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
