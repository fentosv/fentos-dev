import classnames from 'classnames-creator'

import styles from './Languages.module.scss'
import { useRouter } from 'next/router';


interface Props {
    test?: boolean;
}

const d: { [key: string]: string } = {
    'es': 'ES',
    'en': 'EN',
}

export default function Section({ test = false, ...props }: Props) {

    const router = useRouter()

    const { pathname, asPath, query, locale, locales, defaultLocale } = router

    const changeLocale = (nextLocale: string) => {
        router.push({
            pathname,
            query
        },
            asPath,
            { locale: nextLocale }
        )
    }

    return (
        <section className={styles.container}>
            {
                locales?.map(lang => {
                    const itemStyle = classnames(
                        styles.language_item,
                        {
                            [styles['language_item--active']]: locale === lang
                        }
                    )

                    return <div
                        key={lang}
                        onClick={() => changeLocale(lang)}
                        className={itemStyle}
                    >
                        <div
                            className={styles.border}
                        >{d[lang]}</div>
                        <div
                            className={styles.wave}
                        >{d[lang]}</div>

                    </div>

                    // return <div
                    //     key={lang}
                    //     onClick={() => changeLocale(lang)}
                    //     className={itemStyle}
                    // >
                    //     {d[lang]}
                    // </div>
                })
            }

        </section>
    )
}
