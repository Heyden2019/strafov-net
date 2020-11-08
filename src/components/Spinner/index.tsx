import React from 'react'
import styles from "./styles.module.css"

const Spinner = () => {

    const dots = [0,1,2,3,4,5,6,7,8,9,10,11]
    const duration = 1

    return (
        <div className={styles.spinner}>
            {dots.map(dot => (
                <div  key={dot} className={styles.dot} style={{
                    opacity: 100/11 * dot + '%',
                    transform: `rotate(${30 * dot}deg) translate(0, -35px)`,
                    animationDelay: duration/11 * dot + 's',
                }}></div>
            ))}
        </div>
    )
}

export default Spinner
