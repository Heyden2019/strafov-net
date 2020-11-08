import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import helpCreator from '../../utils/heplCreator'
import { getFine } from './../../redux/fine-reducer'
import validateUI from './../../utils/validateUI'
import styles from './styles.module.css'

const UIForm = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState<null | string>(null)
    const [value, setValue] = useState("")   
    const [help, setHelp] = useState(null)   

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHelp(helpCreator(e.currentTarget.value.trim()))
        setError(null)
        setValue(e.currentTarget.value)
    }

    const onSubmit = () => {
        const err = validateUI(value)
        if(err) {
            setError(err)
        } else {
            dispatch(getFine(value.trim()))
        }
    }

    const onHelp = () => {
        setError(null)
        setValue(help)
        setHelp(null)
    }

    return (
        <div className={styles.form}>
            <input type="text" placeholder="Введите УИН" className={styles.searchInput} onChange={onChange} value={value}/>
            <button className={styles.btn} onClick={onSubmit}>Найти</button>
            {help && <p className={styles.help} onMouseDown={onHelp}>{help}</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default UIForm
