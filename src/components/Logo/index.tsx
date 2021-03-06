import React from 'react'
import styles from "./styles.module.css"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.rect}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.339966 14V0H3.55997V11.24H7.25997V4H10.48V11.24H14.2V0H17.4V14H0.339966Z" fill="white"/>
                </svg>
            </div>
            <span className={styles.logo__title}>
                <span className={styles.title__bold}>ШТРАФОВ</span>
                <span className={styles.title__medium}>&nbsp;НЕТ</span>
            </span>
        </div>
    )
}

export default Logo
