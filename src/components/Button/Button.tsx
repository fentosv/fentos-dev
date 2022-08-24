import React from 'react';
import classnames from 'classnames-creator'
import styles from './Button.module.scss'

// This allows us to use any button-specific props: disabled, type, name, etc
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    displayName: string,
    arrayNum: number[],
    mode?: 'rounded' | 'square'
}

export default function Button({ text, displayName, arrayNum, mode = 'square', ...props }: Props) {

    const classes = classnames(
        styles.button,
        {
            [styles[mode ?? '']]: mode
        },
    )

    const click = () => {
        console.log(`The displayName is: ${displayName}`);
        console.log(`The array is: ${arrayNum}`);
        document.documentElement.style.setProperty('--button-color', 'magenta');
    }

    return (

        <button
            className={classes}
            onClick={click}
            {...props}
        >
            {text}
        </button>

    )
}
