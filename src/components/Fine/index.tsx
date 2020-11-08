import React, { FC } from 'react'
import { FineType } from '../../types'
import styles from './styles.module.css'

type PropsType = {
    fine: FineType
}

const Fine: FC<PropsType> = ({fine}) => {
    return (
        <div className={styles.fine}>
            <span className={styles.title}>Постановление #{fine.number}</span>
            <div className={styles.row}>
                <div className={styles.col}>Свидетельство о регистрации:</div>
                <div className={styles.col}>{fine.doc_number}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Дата постановления:</div>
                <div className={styles.col}>{fine.bill_at.split('T')[0]}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Нарушение:</div>
                <div className={styles.col}>{fine.koap_code}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Получатель платежа:</div>
                <div className={styles.col}>{fine.payee_username}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>ИНН:</div>
                <div className={styles.col}>{fine.payee_inn}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>КПП:</div>
                <div className={styles.col}>{fine.payee_kpp}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Расчетный счет:</div>
                <div className={styles.col}>{fine.payee_bank_account}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Банк получателя:</div>
                <div className={styles.col}>{fine.payee_bank_name}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>БИК:</div>
                <div className={styles.col}>{fine.payee_bank_bik}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>ОКТМО(ОКАТО):</div>
                <div className={styles.col}>{fine.payee_oktmo}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>КБК:</div>
                <div className={styles.col}>{fine.kbk}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Сумма штафа:</div>
                <div className={styles.col}>{fine.amount}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>Статус:</div>
                <div className={styles.col}>{fine.payment_status}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>К оплате:</div>
                <div className={styles.col}>{fine.amount_to_pay}</div>
            </div>
        </div>
    )
}

export default Fine
