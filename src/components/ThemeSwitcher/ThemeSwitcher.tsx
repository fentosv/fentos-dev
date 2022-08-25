import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

interface Props {
    test?: boolean;
}

const themeSwitcherContent = {
    "en": {
        light: 'light',
        dark: 'dark'
    },
    "es": {
        light: 'claro',
        dark: 'oscuro'
    }
};

export default function Section({ test = false, ...props }: Props) {

    const dispatch = useDispatch()
    // false: dark // true: light
    const [isChecked, setChecked] = useState<boolean>(false);
    const theme = useSelector((state: RootState) => state.theme.value)

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (!localTheme) return

        const isDark = localTheme === 'dark' ? false : true;

        document.documentElement.setAttribute('data-theme', localTheme);
        dispatch(setTheme(localTheme))

        setChecked(isDark)

    }, [theme, dispatch])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setChecked(e.target.checked);

        const theme = e.target.checked === false ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
        dispatch(setTheme(theme))
    }

    return (
        <div className={s.theme_switch_wrapper}>
            <span aria-hidden={true}>🌙</span>
            <label className={s.theme_switch} htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={handleChange}
                    checked={isChecked}
                />
                <div className={`${s.slider} ${s.round}`}></div>
            </label >
            <span aria-hidden={true}>☀️</span>
        </div >
    )
}