import React from 'react'
import Spinner from '../Spinner'
import styles from "./styles.module.css"

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Spinner />
            <span className={styles.loading}>Загрузка</span>
        </div>
    )
}

export default Preloader
