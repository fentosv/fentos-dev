import classnames from 'classnames-creator'

import s from './ToggleSwitch.module.scss'

import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    className?: string,
}

// Component names: bar and lever
export default function ToggleSwitch({
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
    activeShadow = '0 0 9px 1px #3d9e3d',
    checked,
    className,
    setChecked

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Check");
        setChecked(e.target.checked);
    }

    const mainClass = classnames(
        s.switch,
        className
    )

    return (
        <div
            className={mainClass}
            style={cssVariables as React.CSSProperties}
        >
            <input type="checkbox" name="switch" id="switch" onChange={handleChange} checked={checked} />
            <label htmlFor="switch"></label>
        </div>
    )
}