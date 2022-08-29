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
    activeShadow?: string,
    borderRadious?: string,
    checked: boolean,
    className?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
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
    onChange,
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
                id="switch"
                name="switch"
                onChange={onChange}
                type="checkbox"
                {...props}
            />
            <label htmlFor="switch"></label>
        </div>
    )
}