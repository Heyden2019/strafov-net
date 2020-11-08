import React from 'react'
import { useSelector } from 'react-redux'
import Fine from '../components/Fine'
import Logo from '../components/Logo'
import NotFound from '../components/NotFound'
import Preloader from '../components/Preloader'
import UIForm from '../components/UIForm'
import { RootState } from '../redux/store'
import styles from './styles.module.css'
import Head from 'next/head'

export default function Home() {

  const fine = useSelector((state: RootState) => state.fines.fine)
  const isLoading = useSelector((state: RootState) => state.fines.isLoading)
  const ui = useSelector((state: RootState) => state.fines.ui)

  return (
    <div className={styles.app}>
      <Head>  
        <title>Информация о штрафе</title>
      </Head>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.title}>
        <span>Получение информации о штрафе по УИН</span>
      </div>
      <div className={styles.form}>
        <UIForm />
      </div>
      <div className={styles.content}>
        {isLoading && <Preloader />}
        {!isLoading && ui && !fine && <NotFound ui={ui}/>}
        {!isLoading && ui && fine && <Fine fine={fine}/>}
      </div>
      </div>
  )
}
