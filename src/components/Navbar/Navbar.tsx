import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classnames from 'classnames-creator'
import Settings from '@components/Settings'

import logo from '@public/logo.svg'
import s from './Navbar.module.scss'

interface Props {
  navbarClass?: string
}

const navbarContent = {
  en: {
    about: {
      title: 'About',
    },
    test: {
      title: 'Test',
    },
  },
  es: {
    about: {
      title: 'Información',
    },
    test: {
      title: 'Prueba',
    },
  },
}

function Navbar({ navbarClass }: Props) {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales, defaultLocale } = router

  const t = locale === 'es' ? 'es' : 'en'

  const { about, test } = navbarContent[t]

  return (
    <>
      <header
        className={classnames(s.navbar, {
          [s[navbarClass ?? '']]: navbarClass,
        })}
      >
        <div className={s.navbar_container}>
          <Link href='/'>
            <Image className={s.navbar_icon_img} src={logo} alt='Fentos logo' title='Fentos' priority />
          </Link>

          <Link
            href='/about'
            title={about.title}
            className={classnames(s.navlink, {
              [s['navlink--active']]: router.pathname == '/about',
            })}
          >
            {/* Use bracket notation for BEM implementation */}

            {about.title}
          </Link>
          <Link
            href='/test'
            className={classnames(s.navlink, {
              [s['navlink--active']]: router.pathname == '/test',
            })}
          >
            {test.title}
          </Link>

          <Settings />
        </div>
      </header>
    </>
  )
}

export default Navbar
