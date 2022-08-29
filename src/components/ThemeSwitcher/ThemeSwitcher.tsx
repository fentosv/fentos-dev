import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useEffect, useState } from 'react';

import type { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

import ToggleSwitch from '@components/ToggleSwitch'

interface Props {
    text: string;
}

// Component names: bar and lever
export default function ThemeSwitcher({
    text
}: Props) {

    const dispatch = useDispatch()
    // false: dark // true: light
    const theme = useSelector((state: RootState) => state.theme.value)

    const [isChecked, setChecked] = useState<boolean>(theme !== 'dark' ? true : false);
    // Pasar esto a un único estado de redux: isDark

    // Change atrib and setTheme based on localStorage
    // useEffect(() => {
    //     const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //     if (defaultDark) window.localStorage.setItem('theme', 'dark')

    //     const localTheme = window.localStorage.getItem('theme')
    //     if (!localTheme) return

    //     const isDark = localTheme === 'dark' ? false : true;

    //     document.documentElement.setAttribute('data-theme', localTheme)
    //     dispatch(setTheme(localTheme))

    //     setChecked(isDark)

    // }, [theme, dispatch])

    useEffect(() => {
        const theme = isChecked === false ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('theme', theme)
        dispatch(setTheme(theme))
    }, [isChecked, theme, dispatch])


    return (
        <div className={s.container}>
            <h3 className={s.title}>{text}</h3>

            <ToggleSwitch
                checked={isChecked}
                setChecked={setChecked}
            />

        </div >
    )
}