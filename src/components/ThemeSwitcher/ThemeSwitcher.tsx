import classnames from 'classnames-creator'

import s from './ThemeSwitcher.module.scss'
import { useState } from 'react';
import { RootState } from '@app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@app/themeSlice'

import ToggleSwitch from '@components/ToggleSwitch'
import getTheme from '@app/select';

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

    const handleChange = () => {
        setChecked(!isChecked)
        const newTheme = !isChecked === true ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
    }

    return (
        <div className={s.container}>
            <h3 className={s.title}>{text}</h3>

            <ToggleSwitch
                checked={isChecked}
                onChange={handleChange}
            />

        </div >
    )
}