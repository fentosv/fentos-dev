import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';
import Image from 'next/future/image'
import { useRouter } from 'next/router';
import classnames from 'classnames-creator'
import Languages from '@components/Languages';
import ThemeSwitcher from '@components/ThemeSwitcher';


import logo from '@public/logo.svg';
import s from './Navbar.module.scss'

interface Props {
    navbarClass?: string
}

const navbarContent = {
    "en": {
        about: {
            title: "About"
        },
        test: {
            title: "Test"
        }
    },
    "es": {
        about: {
            title: "Información"
        },
        test: {
            title: "Prueba"
        }
    }
};


function Navbar({ navbarClass }: Props) {

    const router = useRouter()
    const { pathname, asPath, query, locale, locales, defaultLocale } = router

    const t = locale === 'es' ? 'es' : 'en';

    const { about, test } = navbarContent[t]


    return (
        <>
            <header
                className={
                    classnames(
                        s.navbar,
                        {
                            [s[navbarClass ?? '']]: navbarClass
                        }
                    )}
            >
                <div className={s.navbar_container}>

                    <Link href='/'>
                        <div>
                            <Image
                                className={s.navbar_icon_img}
                                src={logo}
                                alt='Logo'
                                title='Logo'
                                priority
                            />
                        </div>
                    </Link>

                    <Link href='/about'>
                        {/* Use bracket notation for BEM implementation */}
                        <div
                            title={about.title}
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/about'
                                    }
                                )}
                        >
                            {about.title}
                        </div>
                    </Link>
                    <Link href='/test'>
                        <div
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/test'
                                    }
                                )}
                        >
                            {test.title}
                        </div>
                    </Link>

                    <Languages></Languages>
                    <ThemeSwitcher></ThemeSwitcher>



                </div >
            </header >
        </>
    );
}

export default Navbar;