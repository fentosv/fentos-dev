import classnames from 'classnames-creator'

import s from './ToggleSwitch.module.scss'

import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    barWidth?: string,
    barHeight?: string,
    leverSize?: string,
    barOnColor?: string,
    barOffColor?: string,
    leverOnColor?: string,
    leverOffColor?: string,
    barShadow?: string,
    leverShadow?: string,
    leverActiveShadow?: string,
    activeShadow?: string,
    borderRadious?: string,
    checked: boolean,
    className?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Component names: bar and lever
export default function ToggleSwitch({
    barWidth = '3rem',
    barHeight = '1rem',
    leverSize = '1.7rem',
    borderRadious = '10rem',
    leverOnColor = '#6200ee',
    barOnColor = '#a472ea',
    leverOffColor = 'white',
    barOffColor = '#c3c3c3',
    barShadow,
    leverShadow,
    leverActiveShadow = '0 0 0 10px #9a61e946',
    // leverActiveShadow = '0 0 9px 1px #9a61e9',
    activeShadow,
    checked,
    className,
    onChange,
    ...rest

}: Props) {
    const name = Math.floor(Math.random() * 1000000000).toString()
    console.log(name);

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
        "--switch-lever-active-shadow": leverActiveShadow,
        "--switch-active-shadow": activeShadow,
        "--border-radious": borderRadious,
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
            <input
                checked={checked}
                id={name}
                name={name}
                onChange={onChange}
                type="checkbox"
                {...rest}
            />
            <label htmlFor={name}></label>
        </div>
    )
}