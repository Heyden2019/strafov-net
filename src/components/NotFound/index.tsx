import React, { FC } from 'react'
import NotFoundIcon from './NotFoundIcon'
import styles from './styles.module.css'

type PropsType = {
    ui: string
}

const NotFound: FC<PropsType> = ({ui}) => {
    return (
        <div className={styles.notfound}>
            <NotFoundIcon />
            <span className={styles.text}>Штраф {ui} не найден</span>
        </div>
    )
}

export default NotFound