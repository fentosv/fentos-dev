import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useEffect, useState } from 'react';

import type { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

interface Props {
    text: string;
    checked?: boolean,
    barWidth?: string,
    barHeight?: string,
    leverSize?: string,
    barOnColor?: string,
    barOffColor?: string,
    leverOnColor?: string,
    leverOffColor?: string,
    barShadow?: string,
    leverShadow?: string,
    activeShadow?: string,
    borderRadious?: string,
}


// Component names: bar and lever
export default function ThemeSwitcher2({
    text,
    checked,
    barWidth = '3.8rem',
    barHeight = '2.2rem',
    leverSize = '1.7rem',
    borderRadious = '10rem',
    barOnColor = 'seagreen',
    barOffColor = '#c3c3c3',
    leverOnColor = 'white',
    leverOffColor = 'white',
    barShadow,
    leverShadow,
    activeShadow = '0 0 4px 0px #9edc9e',
    ...props
}: Props) {

    const cssVariables = {
        "--switch-bar-width": barWidth,
        "--switch-bar-height": barHeight,
        "--switch-button-size": leverSize,
        "--switch-bar-on-background-color": barOnColor,
        "--switch-bar-off-background-color": barOffColor,
        "--switch-lever-on-background-color": leverOnColor,
        "--switch-lever-off-background-color": leverOffColor,
        "--switch-bar-shadow": barShadow,
        "--switch-lever-shadow": leverShadow,
        "--switch-active-shadow": activeShadow,
        "--border-radious": borderRadious,
    }

    const dispatch = useDispatch()
    // false: dark // true: light
    const theme = useSelector((state: RootState) => state.theme.value)

    const [isChecked, setChecked] = useState<boolean>(theme !== 'dark' ? true : false);
    // Pasar esto a un único estado de redux: isDark

    // Change atrib and setTheme based on localStorage
    useEffect(() => {
        const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (defaultDark) window.localStorage.setItem('theme', 'dark')

        const localTheme = window.localStorage.getItem('theme')
        if (!localTheme) return

        const isDark = localTheme === 'dark' ? false : true;

        document.documentElement.setAttribute('data-theme', localTheme)
        dispatch(setTheme(localTheme))

        setChecked(isDark)

    }, [theme, dispatch])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setChecked(e.target.checked);

        const theme = e.target.checked === false ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('theme', theme)
        dispatch(setTheme(theme))
    }

    return (
        <div className={s.container}>
            <p>{text}</p>
            <div
                className={s.switch}
                style={cssVariables as React.CSSProperties}
            >
                <input type="checkbox" name="switch" id="switch" />
                <label htmlFor="switch"></label>
            </div>

        </div >
    )
}