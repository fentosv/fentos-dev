import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useState } from 'react';
import { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

import getTheme from '@app/select';

import { ElegantSwitch } from 'react-elegant-switch';

interface Props {
    text: string;
}

// Component names: bar and lever
export default function ThemeSwitcher({
    text
}: Props) {

    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => getTheme(state))

    // true: dark // false: light
    const [isChecked, setChecked] = useState<boolean>(theme === 'dark' ? true : false);

    function handleChange() {
        setChecked(!isChecked)
        const newTheme = !isChecked === true ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
    }

    return (
        <>
            <div className={s.container}>
                <h3 className={s.title}>{text}</h3>

                <ElegantSwitch
                    checked={isChecked}
                    onChange={handleChange}
                />
            </div >
        </>
    )
}


/* 
? Init config:

 barWidth = '3.8rem',
    barHeight = '2.2rem',
    leverSize = '1.7rem',
    borderRadious = '10rem',
    barOnColor = 'seagreen',
    barOffColor = '#c3c3c3',
    leverOnColor = 'white',
    leverOffColor = 'white',
    activeShadow = '0 0 9px 1px #3d9e3d',

*/