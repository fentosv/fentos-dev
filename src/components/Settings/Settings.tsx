import React, { useState } from 'react';
import classnames from 'classnames-creator'
import styles from './Settings.module.scss'
import Languages from '@components/Languages';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { CgClose } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { AiFillSetting } from 'react-icons/ai';


export default function Button(): JSX.Element {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeModal = (e: React.MouseEvent): void => {
        e.stopPropagation()
        setIsOpen(false)
    }

    const clickOutOfModal = (e: React.MouseEvent): void => {
        const target = e.target as HTMLElement;
        if (target.getAttribute('data-out')) {
            closeModal(e)
        }
    }

    return (

        <>
            <div
                className={styles['icon-container']}
                onClick={() => setIsOpen(true)}
            >
                <FiSettings
                    className={styles.svg}
                />
            </div>

            {/* <FiSettings
                className={styles['main-icon']}
                onClick={() => setIsOpen(true)}
            /> */}

            {/* <AiFillSetting
                className={styles['main-icon']}
                onClick={() => setIsOpen(true)}
            /> */}


            {isOpen &&

                <div
                    data-out={true}
                    onClick={clickOutOfModal}
                    className={styles.modal}
                >
                    <div className={styles['modal-content']}>

                        <CgClose
                            aria-label='close modal'
                            className={styles.close}
                            onClick={(e) => { closeModal(e) }}
                        />
                        <Languages />
                        <ThemeSwitcher />
                    </div>
                </div>
            }
        </>
    )
}
