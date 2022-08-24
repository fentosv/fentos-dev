import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';
import Image from 'next/future/image'
import { useRouter } from 'next/router';
import classnames from 'classnames-creator'
import Languages from '@components/Languages';

import logo from '@public/logo.svg';
import s from './Navbar.module.scss'

interface Props {
    navbarClass?: string
}

const navbarContent = {
    "en": {
        about: {
            title: "About"
        }
    },
    "es": {
        about: {
            title: "Información"
        }
    }
};


function Navbar({ navbarClass }: Props) {

    const router = useRouter()
    const { pathname, asPath, query, locale, locales, defaultLocale } = router

    const t = locale === 'es' ? 'es' : 'en';

    const { about } = navbarContent[t]


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
                        <a>
                            <Image
                                className={s.navbar_icon_img}
                                src={logo}
                                alt='Logo'
                                title='Logo'
                                priority
                            />
                        </a>
                    </Link>

                    <Link href='/about'>
                        {/* Use bracket notation for BEM implementation */}
                        <a
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
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a

                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/about'
                                    }
                                )}
                        >
                            Test
                        </a>
                    </Link>

                    <Languages></Languages>



                </div >
            </header >
        </>
    );
}

export default Navbar;