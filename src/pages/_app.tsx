import '../styles/App.scss'
import '../styles/var.scss'
import '../styles/normalize.css'

import { store } from '@app/store'
import { Provider } from 'react-redux'
import type { RootState } from '@app/store'
import { useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'
import getTheme from '@app/select'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

// Redux functions need to be used inside an element wrapped by <Provider/>, so we can wrap the _app like this
function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {

  const dispatch = useDispatch()

  let currentTheme: any = getTheme(store.getState())

  const handleChange = () => {

    let previousTheme = currentTheme
    currentTheme = getTheme(store.getState())
    if (previousTheme !== currentTheme) {
      console.log('Subscribe change:', previousTheme, 'to', currentTheme)

      document.documentElement.setAttribute('data-theme', currentTheme)
      window.localStorage.setItem('theme', currentTheme)
    }
  }

  store.subscribe(handleChange)
  const unsubscribe = store.subscribe(handleChange)
  unsubscribe()

  // Using useEffect as componentDidMount
  // We took the user theme from localStorage and settings, then we store it in the redux state
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (defaultDark) window.localStorage.setItem('theme', 'dark')

    const localTheme = window.localStorage.getItem('theme')
    if (!localTheme) return

    dispatch(setTheme(localTheme))

  }, [dispatch])

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