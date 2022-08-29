import React, { useState } from 'react';
import classnames from 'classnames-creator'
import styles from './Settings.module.scss'
import Languages from '@components/Languages';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { CgClose } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { useRouter } from 'next/router';

const settingsContent = {
    "en": {
        header: 'Settings',
        theme_switcher: 'Enable dark mode',

    },
    "es": {
        header: 'Ajustes',
        theme_switcher: 'Activar modo oscuro',
    }
};

export default function Button(): JSX.Element {

    const router = useRouter()
    const { pathname, asPath, query, locale, locales, defaultLocale } = router

    const t = locale === 'es' ? 'es' : 'en';

    const { header, theme_switcher } = settingsContent[t]


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeModal = (e: React.MouseEvent): void => {
        e.stopPropagation()
        setIsOpen(false)
    }

    const clickOutOfModal = (e: React.MouseEvent): void => {
        const target = e.target as HTMLElement;
        if (target.getAttribute('data-out')) {
            closeModal(e)
        }
    }

    return (

        <>
            <div
                className={styles['icon-container']}
                onClick={() => setIsOpen(true)}
            >
                <FiSettings
                    className={styles.svg}
                />
            </div>

            {isOpen &&

                <div
                    data-out={true}
                    onClick={clickOutOfModal}
                    className={styles.modal}
                >
                    <div className={styles['modal-content']}>
                        <div className={styles['modal-header']}>
                            <h1 className={styles['modal-title']}>
                                {header}
                            </h1>
                            <CgClose
                                aria-label='close modal'
                                className={styles.close}
                                onClick={(e) => { closeModal(e) }}
                            />
                        </div>
                        <div className={styles['modal-body']}>
                            <Languages />
                            <ThemeSwitcher text={theme_switcher} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
