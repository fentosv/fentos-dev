import React from 'react'

import s from './Footer.module.scss'
import GitHub from '@components/icons/GitHub';
import { useRouter } from 'next/router';

const footerContent = {
    "en": {
        description: "Developed by"
    },
    "es": {
        description: "Desarrollado por"
    }
};

function Footer() {
    const router = useRouter()
    const { pathname, asPath, query, locale, locales, defaultLocale } = router

    const t = locale === 'es' ? 'es' : 'en';

    const { description } = footerContent[t]

    return (
        <>
            <footer className={s.footer} >
                <div className={s.footer_container}>

                    <div>
                        <h3> {description} <strong>Fentos</strong></h3>
                    </div>
                    <a target='_blank' href='https://github.com/fentosv' rel='noopener noreferrer'>
                        <GitHub />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;