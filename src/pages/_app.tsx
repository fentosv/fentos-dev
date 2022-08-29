import '../styles/App.scss'
import '../styles/var.scss'
import '../styles/normalize.css'

import { store } from '@app/store'
import { Provider } from 'react-redux'
import type { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

// Redux functions need to be used in an element wrapped by <Provider/>, so we can wrap the app function like this
function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {

  const dispatch = useDispatch()
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (defaultDark) window.localStorage.setItem('theme', 'dark')

    const localTheme = window.localStorage.getItem('theme')
    if (!localTheme) return

    const isDark = localTheme === 'dark' ? false : true;

    document.documentElement.setAttribute('data-theme', localTheme)
    dispatch(setTheme(localTheme))

  }, [])

  return (
    <>{children}</>
  )
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  )
}

export default MyApp