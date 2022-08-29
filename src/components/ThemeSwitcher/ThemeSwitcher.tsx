import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useState } from 'react';
import { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

import getTheme from '@app/select';

import ToggleSwitch from '@components/ToggleSwitch'
import Switch from "react-switch";

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

    const [isChecked1, setIsChecked1] = useState<boolean>(false);
    const [isChecked2, setIsChecked2] = useState<boolean>(true);
    const [isChecked3, setIsChecked3] = useState<boolean>(false);
    const [isChecked4, setIsChecked4] = useState<boolean>(true);

    function handleChange() {
        setChecked(!isChecked)
        const newTheme = !isChecked === true ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
    }

    function handleChange1() {
        setIsChecked1(!isChecked1)
    }
    function handleChange2() {
        setIsChecked2(!isChecked2)
    }
    function handleChange3() {
        setIsChecked3(!isChecked3)
    }
    function handleChange4() {
        setIsChecked4(!isChecked4)
    }

    return (
        <>
            <div className={s.container}>
                <h3 className={s.title}>{text}</h3>

                <ToggleSwitch
                    checked={isChecked}
                    onChange={handleChange}
                />

            </div >

            {/* TODO Style fixes */}
            {/* <div className={s.container}>
                <h3 className={s.title}>{'Enabled OFF'}</h3>
                <ToggleSwitch
                    checked={isChecked1}
                    onChange={handleChange1}

                />
            </div >
            <div className={s.container}>
                <h3 className={s.title}>{'Enabled ON'}</h3>
                <ToggleSwitch
                    checked={isChecked2}
                    onChange={handleChange2}

                />
            </div >
            <div className={s.container}>
                <h3 className={s.title}>{'Disabled OFF'}</h3>
                <ToggleSwitch
                    checked={isChecked3}
                    onChange={handleChange3}
                    disabled
                />
            </div >
            <div className={s.container}>
                <h3 className={s.title}>{'Disabled ON'}</h3>
                <ToggleSwitch
                    checked={isChecked4}
                    onChange={handleChange4}
                    disabled
                />
            </div > */}

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